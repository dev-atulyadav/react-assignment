import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Questions from "../components/Questions";
import Q1 from "../components/Q1/Q1";
import Q2 from "../components/Q2/Q2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Questions />,
      },
      {
        path: "/q-1",
        element: <Q1 />,
      },
      {
        path: "/q-2",
        element: <Q2 />,
      },
    ],
  },
]);
