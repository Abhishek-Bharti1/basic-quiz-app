import React from "react";

const Result = ({ userAnswer, questions, resetQuiz }) => {
  const correctAnswers = userAnswer.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions
        <span onClick={resetQuiz}>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((question, index) => (
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <li key={index} data-correct={userAnswer[index]}>
              Q{index + 1}.{question.question}
            </li>
            {!userAnswer[index] && (
              <span style={{ color: "green" }}>
                Correct Answer :{" "}
                {question.answerOptions.map(
                  (el) => el.isCorrect == true && el.text
                )}
              </span>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Result;
