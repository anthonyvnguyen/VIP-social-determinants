"use client";

import { FormEvent, SetStateAction, useState } from "react";
import { For, HStack } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { RadioCardItem, RadioCardLabel, RadioCardRoot } from "../ui/radio-card";

import { questions } from "./questions";

const Survey_Questions = ({
  setAnswers,
}: {
  setAnswers: React.Dispatch<SetStateAction<{ [key: string]: number | null }>>;
}) => {
  // Function to handle changes in answers
  const handleAnswerChange = (questionKey: string, selectedValue: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionKey]: Number(selectedValue),
    }));
  };

  return (
    <>
      <For each={Object.entries(questions)}>
        {([key, question]) => (
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
                      onClick={(value) => handleAnswerChange(key, option.value)}
                    />
                  )}
                </For>
              </HStack>
            </RadioCardRoot>
          </Card.Root>
        )}
      </For>
    </>
  );
};

export default Survey_Questions;
