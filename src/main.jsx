import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router.jsx";
import QuestionsState from "./contexts/QuestionsState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuestionsState>
      <RouterProvider router={router} />
    </QuestionsState>
  </React.StrictMode>
);
