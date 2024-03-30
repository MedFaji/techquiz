import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { data } from "../assets/data";
import love from "../assets/love.png";

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [questionCount, setQuestionCount] = useState(null);
  const [show, setShow] = useState(false);
  const [clickAnswer, setClickAnswer] = useState(false);

  //this will show user's answer when he/she click on a variant
  const checkAnswer = (variant) => {
    setMyAnswer(variant);
    setClickAnswer(true);
  };

  //this will compare user's answer with the correct answer and setScore increase to 1 everytime user's answer is correct.
  const checkCorrectAnswer = () => {
    if (myAnswer === data[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  //this will show the answer button whenever the user click on a variant
  const showAnswer = () => {
    setShow(true);
  };

  //this will reset the show answer button for the next question otherwise it will show again even user does not click on any variant
  const reset = () => {
    setShow(false);
    setClickAnswer(false);
  };

  //this will determine the game is over or not
  const finishHandler = () => {
    if (currentQuestion === questionCount - 1) {
      setFinish(true);
    }
  };

  //when the game is over, this will reset all the data so the user can start over again
  const startOver = () => {
    setCurrentQuestion(0);
    setFinish(false);
    setMyAnswer("");
    setScore(0);
    setQuestionCount(null);
    setStart(false);
  };

  //this will start the game
  const startGame = (e) => {
    e.preventDefault();
    setStart(true);
  };

  if (finish) {
    return (
      <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
        <div className="wrapper">
          <h3 className="m-4 p-2 h-30 text-center text-2xl font-bold">
            {`Game Over! Your Final Score is
            ${score}/${questionCount}
            points.`}
          </h3>
          <button
            className="w-full h-14 mt-2 px-2 bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
            onClick={() => startOver()}
          >
            Start Over
          </button>
        </div>
      </div>
    );
  } else if (!start) {
    return (
      <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
        <div className="wrapper">
          <h2 className="m-4 p-2 h-30 text-center text-2xl font-bold">
            Welcome to the Quiz Game
          </h2>

          <form onSubmit={startGame}>
            <label htmlFor="questionCount" className="block mb-2">
              Number of Questions:
            </label>
            <input
              type="number"
              id="questionCount"
              name="questionCount"
              min="1"
              max={data.length}
              className="w-full h-14 mt-2 px-2  text-[20px] outline-pink-400"
              placeholder={
                `Enter the number of questions you want to play, max is ` +
                data.length
              }
              onChange={(e) => setQuestionCount(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full h-14 mt-2 px-2  bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
            >
              Start Game
            </button>
          </form>

          <footer className="m-4 text-center">
            Made with{" "}
            <img src={love} alt="" className="h-[16px] inline-block" /> by{" "}
            <a
              className="text-pink-400"
              href="https://riddle.solutions/"
              target="_blank"
              rel="noreferrer"
            >
              Med Faji aka. Medevs
            </a>{" "}
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
        <div className="wrapper">
          <h2 className="m-4 p-2 h-30 text-center text-2xl font-bold">
            {data[currentQuestion].question}
          </h2>
          <span className="m-2 border-2 border-black mx-auto px-2 bg-gray-600 text-pink-400 text-center">
            {`${currentQuestion + 1}/${questionCount}`}
          </span>
          {data[currentQuestion].variants.map((variant, index) => (
            <div
              className="m-2 h-14 border-2 border-black mx-auto text-center"
              key={index}
            >
              <p
                key={variant.id}
                className={`variant ${
                  myAnswer === variant
                    ? myAnswer === data[currentQuestion].answer
                      ? "correctAnswer"
                      : "incorrectAnswer"
                    : null
                }`}
                onClick={() => checkAnswer(variant)}
              >
                {variant}
              </p>
            </div>
          ))}

          {clickAnswer && (
            <button
              className="w-full h-14 mt-2 px-2 bg-gray-200 text-blue-400 font-bold hover:bg-gray-400 hover:text-blue-600"
              onClick={() => showAnswer()}
            >
              Show Answer
            </button>
          )}
          {show && (
            <p className="m-2 h-14 mx-auto text-center">
              Correct Answer: {data[currentQuestion].answer}
            </p>
          )}

          {currentQuestion < questionCount - 1 && (
            <button
              className="w-full h-14 mt-2 px-2  bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                checkCorrectAnswer();
                reset();
              }}
            >
              NEXT
            </button>
          )}

          {currentQuestion === questionCount - 1 && (
            <button
              className="w-full h-14 mt-2 px-2 bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
              onClick={() => finishHandler()}
            >
              FINISH
            </button>
          )}

          <footer className="m-4 text-center">
            Made with{" "}
            <img src={love} alt="" className="h-[16px] inline-block" /> by{" "}
            <a
              className="text-pink-400"
              href="https://riddle.solutions/"
              target="_blank"
              rel="noreferrer"
            >
              Med Faji aka. Medevs
            </a>{" "}
          </footer>
        </div>
      </div>
    );
  }
};

export default Home;
