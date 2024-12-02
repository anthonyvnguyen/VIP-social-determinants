import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {Heading} from "@chakra-ui/react";
import { RiskScores } from "@/pages/Survey";

const RiskVisualization = ({ riskScores }: { riskScores: RiskScores}) => {

  const riskScore = Math.floor(riskScores.non_diabetic * 1 + riskScores.prediabetic * 5 + riskScores.diabetic * 10);

  return (
    <div style={{ marginTop: "20px" }}>
    <Heading as="h2" size="lg" mb={4}>
      Risk Scores:
    </Heading>
    <p>Non-Diabetic: {(riskScores.non_diabetic * 100).toFixed(2)}%</p>
    <p>Prediabetic: {(riskScores.prediabetic * 100).toFixed(2)}%</p>
    <p>Diabetic: {(riskScores.diabetic * 100).toFixed(2)}%</p>
    <div style={{ width: "200px", marginTop: "20px" }}>
      <CircularProgressbar
        value={(riskScore / 10) * 100}
        text={`${riskScore.toFixed(1)} / 10`}
        styles={buildStyles({
          textColor: "#000",
          pathColor: riskScore > 7 ? "red" : riskScore > 4 ? "orange" : "green",
        })}
      />
    </div>
  </div>
  );
};

export default RiskVisualization;

