import { useEffect, useState } from "react";
import QuestionsCard from "./components/QuestionsCard";
import Result from "./components/Result";

import questions from "./constants/questions.json";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const handleAnswerClick = (answer) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer([...userAnswer, answer]);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };

  return (
    <div className="container">
      <h1>World Quiz</h1>
      {currentQuestion < questions.length && (
        <QuestionsCard
          question={questions[currentQuestion]}
          handleAnswerClick={handleAnswerClick}
        />
      )}
      {currentQuestion === questions.length && (
        <Result
          userAnswer={userAnswer}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
