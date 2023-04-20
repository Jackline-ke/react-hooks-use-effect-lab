import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  let [modifiedCounter, setModifiedCounter] = useState(1);


  useEffect(() => {
    console.log("useEffect Triggered");
    setModifiedCounter(executeFizzBuzz)
  }, [modifiedCounter])

  const executeFizzBuzz = () => {

    if (counter % 3 == 0 && counter % 5 == 0) {
      setModifiedCounter = "FizzBuzz";
    }
    else if (counter % 5 == 0) {
      setModifiedCounter = "Buzz";
    }
    else if (counter % 3 == 0) {
      setModifiedCounter = "Fizz";
    }
    else {
      setModifiedCounter = counter;
    }
  }

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
