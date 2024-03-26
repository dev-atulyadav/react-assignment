import React, { createContext, useState } from "react";

export const QuestionContext = createContext();
export default function QuestionsState({ children }) {
  const [questions] = useState([
    {
      question: `1. Render a Header Component:
            Create a reusable header component that displays a title at the top of a page.`,
      solutionPath: "/q-1",
    },
    {
      question: `2. Create a Button Component:
      Develop a customizable button component that can be easily styled and used throughout the application.`,
      solutionPath: "/q-2",
    },
    {
      question: `3.Render an Image Component:
      Build an image component that efficiently displays images with optional placeholders or lazy loading.`,
      solutionPath: "/q-3",
    },
  ]);

  return (
    <QuestionContext.Provider value={{ questions }}>
      {children}
    </QuestionContext.Provider>
  );
}
