import React from "react";
const QuestionsCard = ({ question,handleAnswerClick }) => {

  return (
    <div className="question">
      <h2>{question.question}</h2>
     <ul className="options">
        {question.answerOptions.map((option) => (
          <li  key={option.text}>
            <button onClick={()=>handleAnswerClick(option.isCorrect)}>
                {option.text}
            </button>
          </li>
        ))}
     </ul>
    </div>
  );
};

export default QuestionsCard;
