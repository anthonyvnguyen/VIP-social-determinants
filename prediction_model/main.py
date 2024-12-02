# prediction_model/main.py

import os
import logging
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field, create_model
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

# Initialize logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app (only once)
app = FastAPI(title="Diabetes Risk Prediction API")

# CORS settings
origins = [
    "http://localhost:3000",
    "https://your-react-app-domain.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model
current_dir = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(current_dir, "random_forest_model.joblib")

if not os.path.exists(MODEL_PATH):
    logger.error(f"Model file not found at {MODEL_PATH}")
    raise RuntimeError("Model file not found.")
else:
    model = joblib.load(MODEL_PATH)
    logger.info("Model loaded successfully.")

# Define the FEATURES array as shown above

FEATURES = [
    {
        "name": "Life Satisfaction",
        "type": Optional[int],
        "range": (1, 4),
        "description": "Life satisfaction rating between 1 and 4"
    },
    {
        "name": "Emotional Support",
        "type": Optional[int],
        "range": (1, 5),
        "description": "Emotional support rating between 1 and 5"
    },
    {
        "name": "Loneliness",
        "type": Optional[int],
        "range": (1, 5),
        "description": "Loneliness rating between 1 and 5"
    },
    {
        "name": "Employment",
        "type": Optional[int],
        "range": (1, 2),
        "description": "Employment loss in the past 12 months (1=Yes, 2=No)"
    },
    {
        "name": "Food Stamps",
        "type": Optional[int],
        "range": (1, 2),
        "description": "Received food stamps (1=Yes, 2=No)"
    },
    {
        "name": "Food Insecurity",
        "type": Optional[int],
        "range": (1, 5),
        "description": "Frequency of food insecurity (1=Always to 5=Never)"
    },
    {
        "name": "Bill Insecurity",
        "type": Optional[int],
        "range": (1, 2),
        "description": "Unable to pay mortgage, rent, or utility bills (1=Yes, 2=No)"
    },
    {
        "name": "Utility Insecurity",
        "type": Optional[int],
        "range": (1, 2),
        "description": "Threatened utility shutoff (1=Yes, 2=No)"
    },
    {
        "name": "Transportation Insecurity",
        "type": Optional[int],
        "range": (1, 2),
        "description": "Lack of reliable transportation (1=Yes, 2=No)"
    },
    {
        "name": "Stress",
        "type": Optional[int],
        "range": (1, 5),
        "description": "Stress frequency (1=Always to 5=Never)"
    },
    {
        "name": "Marital Status",
        "type": Optional[int],
        "range": (1, 6),
        "description": "Marital status (1=Married, 2=Divorced, 3=Widowed, 4=Separated, 5=Never married, 6=Unmarried couple)"
    },
    {
        "name": "Education Level",
        "type": Optional[int],
        "range": (1, 6),
        "description": "Education level (1=Never attended or kindergarten, 2=Grades 1-8, 3=Grades 9-11, 4=Grades 12 or GED, 5=College 1-3 years, 6=College 4+ years)"
    },
    {
        "name": "Own or Rent Home",
        "type": Optional[int],
        "range": (1, 3),
        "description": "Home ownership status (1=Own, 2=Rent, 3=Other arrangement)"
    },
    {
        "name": "Has Phone",
        "type": Optional[int],
        "range": (1, 8),
        "description": "Number of cell phones owned (1=1, 2=2, 3=3, 4=4, 5=5, 6=Six or more, 8=None)"
    },
    {
        "name": "Veteran",
        "type": Optional[int],
        "range": (1, 2),
        "description": "Veteran status (1=Yes, 2=No)"
    },
    {
        "name": "Employment Status",
        "type": Optional[int],
        "range": (1, 8),
        "description": "Employment status (1=Employed for wages, 2=Self-employed, 3=Out of work 1+ years, 4=Out of work <1 year, 5=Homemaker, 6=Student, 8=Unable to work)"
    },
    {
        "name": "Children",
        "type": Optional[int],
        "range": (1, 88),
        "description": "Number of children under 18 in household (1=1, 2=2, 88=None)"
    },
    {
        "name": "Household Income",
        "type": Optional[int],
        "range": (1, 11),
        "description": "Annual household income range (1=<\$10K, 2=<\$15K, 3=<\$20K, 4=<\$25K, 5=<\$35K, 6=<\$50K, 7=<\$75K, 8=<\$100K, 9=<\$150K, 10=<\$200K, 11=\$200K+)"
    },
    {
        "name": "Pregnant",
        "type": Optional[int],
        "range": (1, 2),
        "description": "Currently pregnant (1=Yes, 2=No)"
    },
    {
        "name": "Smoker",
        "type": Optional[int],
        "range": (0, 1),
        "description": "Smoked at least 100 cigarettes (1=Yes, 0=No)"
    },
    {
        "name": "Alcohol Consumption",
        "type": Optional[int],
        "range": (1, 3),
        "description": "Average number of drinks consumed per day (1=1 drink, 2=2 drinks, 3=3 drinks, 88=None)"
    },
    {
        "name": "Tobacco Use Frequency",
        "type": Optional[int],
        "range": (0, 2),
        "description": "Tobacco use frequency (1=Every day, 2=Some days, 0=Not at all)"
    },
    {
        "name": "Depressed",
        "type": Optional[int],
        "range": (0, 1),
        "description": "Lived with someone depressed (1=Yes, 0=No)"
    },
    {
        "name": "Sex",
        "type": Optional[int],
        "range": (1, 2),
        "description": "Biological sex at birth (1=Male, 2=Female)"
    },
    {
        "name": "Female Sexual Orientation",
        "type": Optional[int],
        "range": (1, 4),
        "description": "Sexual orientation (1=Lesbian or Gay, 2=Straight, 3=Bisexual, 4=Something else)"
    },
    {
        "name": "Transgender",
        "type": Optional[int],
        "range": (0, 3),
        "description": "Transgender identity (1=Male-to-Female, 2=Female-to-Male, 3=Gender non-conforming, 0=No)"
    },
    {
        "name": "Drunk Family",
        "type": Optional[int],
        "range": (0, 1),
        "description": "Lived with a problem drinker (1=Yes, 0=No)"
    },
    {
        "name": "Drugs In Family",
        "type": Optional[int],
        "range": (0, 1),
        "description": "Lived with a drug abuser (1=Yes, 0=No)"
    },
    {
        "name": "Divorced Parents",
        "type": Optional[int],
        "range": (0, 8),
        "description": "Parents separated or divorced (1=Yes, 0=No, 8=Parents not married)"
    },
    {
        "name": "Primary Language",
        "type": Optional[int],
        "range": (1, 3),
        "description": "Preferred language (1=English, 2=Spanish, 3=Other)"
    },
    {
        "name": "Urban or Rural",
        "type": Optional[int],
        "range": (1, 2),
        "description": "Urban/Rural status (1=Urban counties, 2=Rural counties)"
    },
    {
        "name": "Health Plan",
        "type": Optional[int],
        "range": (0, 1),
        "description": "Health insurance coverage (1=Have insurance, 0=Do not have insurance)"
    }
]


# Dynamically create the InputData model
input_fields = {
    feature["name"]: (Optional[int], Field(
        None,
        ge=feature["range"][0],
        le=feature["range"][1],
        description=feature["description"]
    )) for feature in FEATURES
}

InputData = create_model('InputData', **input_fields)

# Define the response model
class RiskScores(BaseModel):
    non_diabetic: float = Field(..., ge=0, le=1, description="Probability of being non-diabetic")
    prediabetic: float = Field(..., ge=0, le=1, description="Probability of being prediabetic")
    diabetic: float = Field(..., ge=0, le=1, description="Probability of being diabetic")

# Define the /predict endpoint
@app.post("/predict", response_model=RiskScores)
def predict_risk(data: InputData):
    print(data)
    try:
        # Convert input data to numpy array, replacing None with np.nan
        input_features = np.array([
            [
                getattr(data, feature["name"], None) if getattr(data, feature["name"], None) is not None else np.nan
                for feature in FEATURES
            ]
        ])

        # Log the input features
        logger.info(f"Input features: {input_features}")
        logger.info(f"Input features shape: {input_features.shape}")

        # Validate feature count
        expected_features = model.n_features_in_  # Number of features the model was trained on
        if input_features.shape[1] != expected_features:
            raise ValueError(f"Input has {input_features.shape[1]} features, but model expects {expected_features} features.")

        # Get probability estimates
        probabilities = model.predict_proba(input_features)[0]

        # Assuming classes are ordered as [0,1,2]
        return RiskScores(
            non_diabetic=probabilities[0],
            prediabetic=probabilities[1],
            diabetic=probabilities[2]
        )
    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
