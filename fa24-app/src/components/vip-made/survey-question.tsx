// src/components/vip-made/survey-question.tsx

import { SetStateAction } from "react";
import { For, HStack } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { RadioCardItem, RadioCardLabel, RadioCardRoot } from "../ui/radio-card";

import questions from "./questions.json"; // Import JSON

const Survey_Questions = ({
  setAnswers,
}: {
  setAnswers: React.Dispatch<SetStateAction<{ [key: string]: number | null }>>;
}) => {
  // Function to handle changes in answers
  const handleAnswerChange = (questionTitle: string, selectedValue: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionTitle]: Number(selectedValue),
    }));
  };

  return (
    <>
      <For each={Object.entries(questions)}>
        {([key, question]) => (
          <div style={{paddingTop: 4, paddingBottom: 4 }}>
            <Card.Root key={key} p={4} variant="outline">
              <RadioCardRoot paddingX={2}>
                <RadioCardLabel>{question.question}</RadioCardLabel>
                <HStack align="stretch">
                  <For each={question.options}>
                    {(option) => (
                      <RadioCardItem
                        label={option.label}
                        value={option.value}
                        key={option.value}
                        onClick={() =>
                          handleAnswerChange(question.title, option.value)
                        }
                        bg={"brand.600"}
                      />
                    )}
                  </For>
                </HStack>
              </RadioCardRoot>
            </Card.Root>
          </div>
        )}
      </For>
    </>
  );
};

export default Survey_Questions;
