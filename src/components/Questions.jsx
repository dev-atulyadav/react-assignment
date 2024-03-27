import React, { useContext } from "react";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { QuestionContext } from "../contexts/QuestionsState";

const Questions = () => {
  const { questions } = useContext(QuestionContext);
  return (
    <article className="h-full w-full p-4 border border- rounded-xl bg-[#17111537] text-white flex flex-col justify-start items-start gap-4 overflow-y-scroll">
      <div className="flex justify-start items-center gap-3 text-4xl font-semibold">
        <FaFileCircleQuestion />
        <h2>React Assignments</h2>
      </div>
      {questions.map((value, index) => (
        <main key={index} className="text-xl w-full">
          <ul>
            <li className="bg-[#00000000] backdrop-blur-[10px] border p-2 rounded-xl w-full">
              <Link to={value.solutionPath}>{value.question}</Link>
            </li>
          </ul>
        </main>
      ))}
    </article>
  );
};

export default Questions;
