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
      question: `3. Render an Image Component:
      Build an image component that efficiently displays images with optional placeholders or lazy loading.`,
      solutionPath: "/q-3",
    },
    {
      question: `4. Render a List Component:
      Implement a flexible list component capable of rendering various types of data in list format.`,
      solutionPath: "/q-4",
    },
    {
      question: `5. Render Text with Styled Component:
      Utilize styled components to create visually appealing text elements with custom styles.`,
      solutionPath: "/q-5",
    },
    {
      question: `6. Create a Link Component:
      Design a link component that provides navigation functionality with support for external and internal links.`,
      solutionPath: "/q-6",
    },
    {
      question: `7. Render a Form Component:
      Construct a form component with validation and submission handling for user input.`,
      solutionPath: "/q-7",
    },
    {
      question: `8. Render a Paragraph Component:
      Create a reusable paragraph component for displaying text content with consistent styling.`,
      solutionPath: "/q-8",
    },
    {
      question: `9. Render a Div with a Class Component:
      Develop a generic div component that can be styled using CSS classes for layout purposes.`,
      solutionPath: "/q-9",
    },
    {
      question: `10. Create a Footer Component:
      Develop a footer component that includes relevant information or navigation links at the bottom of the page.`,
      solutionPath: "/q-10",
    },
  ]);

  return (
    <QuestionContext.Provider value={{ questions }}>
      {children}
    </QuestionContext.Provider>
  );
}
