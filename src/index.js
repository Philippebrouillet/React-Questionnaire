import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { QuizProvider } from "./Contexts/Quiz";
import Quiz from "./components/Quiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);
