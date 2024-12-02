// src/pages/Survey.tsx

import Survey_Questions from "../components/vip-made/survey-question";
import { Card, Heading } from "@chakra-ui/react";
import { Alert } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { useState } from "react";
import axios from "axios";
import questions from "../components/vip-made/questions.json";
import RiskVisualization from "../components/vip-made/risk_score_visualization";

export interface RiskScores {
  non_diabetic: number;
  prediabetic: number;
  diabetic: number;
}

function Survey() {
  // Initialize state with all question titles set to null
  const initial_input = Object.values(questions).reduce(
    (acc, question) => {
      acc[question.title] = null;
      return acc;
    },
    {} as { [key: string]: number | null },
  );

  const [answers, setAnswers] = useState<{ [key: string]: number | null }>(
    initial_input,
  );
  const [riskScores, setRiskScores] = useState<RiskScores | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state
    setRiskScores(null); // Reset previous scores
    setLoading(true); // Start loading

    // Check for null values
    const answered = Object.values(answers).every((value) => value === null);
    if (answered) {
      setError("Please answer all questions before submitting.");
      setLoading(false);
      return;
    }

    try {
      const apiUrl =
        process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/predict";
      const response = await axios.post<RiskScores>(apiUrl, answers);
      setRiskScores(response.data);
    } catch (error: any) {
      console.error("Error making prediction:", error);
      if (error.response && error.response.data && error.response.data.detail) {
        setError(`Prediction failed: ${error.response.data.detail}`);
      } else {
        setError("Failed to get prediction. Please try again later.");
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <Card.Root maxW={1080}>
        <Card.Body bg="brand.500">
          <Card.Title>Survey</Card.Title>
          <Card.Description paddingBottom={6}>
            Please answer the following questions to assess your risk of
            diabetes.
          </Card.Description>

          <form onSubmit={handleSubmit} style={{ justifyContent: "center" }}>
            <Survey_Questions setAnswers={setAnswers} />
            {error && (
              <Alert status="error" mb={4}>
                {error}
              </Alert>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "8px",
              }}
            >
              <Button
                type="submit"
                colorScheme="teal"
                disabled={
                  Object.values(answers).every((value) => value === null) ||
                  loading
                }
                loading={loading}
                bg={"brand.100"}
              >
                Submit
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card.Root>

      {riskScores && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <RiskVisualization riskScores={riskScores} />
        </div>
      )}
    </div>
  );
}

export default Survey;
