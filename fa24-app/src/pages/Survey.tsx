import Survey_Questions from "../components/vip-made/survey-question";
import { Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { questions } from "../components/vip-made/questions";

function Survey() {
  var initial_input = Object.entries(questions).reduce(
    (acc, [key, question]) => {
      acc[key] = null;
      return acc;
    },
    {} as { [key: string]: number | null },
  );

  const [answers, setAnswers] = useState<{ [key: string]: number | null }>(
    initial_input,
  );
  const [riskScores, setRiskScores] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", {
        feature1: parseFloat(answers.feature1),
        feature2: parseFloat(answers.feature2),
        feature3: parseFloat(answers.feature3),
        featureN: parseFloat(answers.featureN),
      });
      
      setRiskScores(response.data);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  return (
    <>
      <Heading as="h1" size="4xl" textAlign="center">
        Survey
      </Heading>
      <Survey_Questions setAnswers={setAnswers} />
      <Button onClick={handleSubmit}>Submit</Button>

      {riskScores && (
        <div>
          <p>Non-Diabetic: {riskScores.non_diabetic * 100}%</p>
          <p>Prediabetic: {riskScores.prediabetic * 100}%</p>
          <p>Diabetic: {riskScores.diabetic * 100}%</p>
        </div>
      )}
    </>
  );
}

export default Survey;
