import React, { useContext } from "react";
import { QuizContext } from "../Contexts/Quiz";
import Question from "./Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log([quizState, dispatch]);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Félicitation</div>
          <div className="results-info">
            <div>Vous avez terminé le quizz</div>
            <div>
              Vous avez {quizState.correctAnswersCount} bonnes réponses sur{" "}
              {quizState.questions.length}
            </div>
            <div
              className="next-button"
              onClick={() => dispatch({ type: "RESTART" })}
            >
              RECOMMENCER
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {""}
            {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Question Suivante
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
