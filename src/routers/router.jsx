import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Questions from "../components/Questions";
import Q1 from "../components/Q1/Q1";
import Q2 from "../components/Q2/Q2";
import Q3 from "../components/Q3/Q3";
import Q4 from "../components/Q4/Q4";
import Q5 from "../components/Q5/Q5";

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
      {
        path: "/q-3",
        element: <Q3 />,
      },
      {
        path: "/q-4",
        element: <Q4 />,
      },
      {
        path: "/q-5",
        element: <Q5 />,
      },
    ],
  },
]);
