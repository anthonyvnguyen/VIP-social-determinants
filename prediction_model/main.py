# prediction_model/main.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import os
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Diabetes Risk Prediction API")

# CORS settings
origins = [
    "http://localhost:3000",
    "https://your-react-app-domain.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model
current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, "random_forest_model.joblib")
try:
    model = joblib.load(model_path)
except FileNotFoundError:
    raise FileNotFoundError("Model file 'random_forest_model.joblib' not found.")

# Define the input data model
class InputData(BaseModel):
    feature1: float
    feature2: float
    feature3: float
    # Add all necessary features
    featureN: float

# Define the response model
class RiskScores(BaseModel):
    non_diabetic: float
    prediabetic: float
    diabetic: float

@app.post("/predict", response_model=RiskScores)
def predict_risk(data: InputData):
    try:
        # Convert input data to numpy array
        input_features = np.array([[
            data.feature1,
            data.feature2,
            data.feature3,
            # Add all necessary features in order
            data.featureN
        ]])

        # Get probability estimates
        probabilities = model.predict_proba(input_features)[0]

        # Assuming classes are ordered as [0,1,2]
        return RiskScores(
            non_diabetic=probabilities[0],
            prediabetic=probabilities[1],
            diabetic=probabilities[2]
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
