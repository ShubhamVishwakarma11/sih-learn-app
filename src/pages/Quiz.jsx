import { useReducer } from "react";
import Progress from "../components/Progress";
import Question from "../components/Question";
import Answers from "../components/Answers";
import QuizContext from "../context/QuizContext";

import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_QUIZ,
} from "../reducers/types.js";
import quizReducer from "../reducers/QuizReducer";

import "./App.css";

function Quiz() {
  const questions = [
    {
      id: 1,
      question:
        "Who of the following is the Chancellor of the NALSAR University of Law located in Hyderabad?",
      answer_a: "Governor of A.P",
      answer_b: "The Union Law Minister",
      answer_c: "Chief Justice of AP High Court",
      answer_d: "Solicitor General of India",
      correct_answer: "c",
    },
    {
      id: 2,
      question:
        "Who is the Legal Advisor to the Government of a State in India?",
      answer_a: "Solicitor General of India",
      answer_b: "The State Chief Legal Officer",
      answer_c: "The High Court",
      answer_d: "The Advocate General",
      correct_answer: "d",
    },
    {
      id: 3,
      question: " The age of retirement of a Judge of a High Court in India is",
      answer_a: "58 years",
      answer_b: "60 years",
      answer_c: "62 years",
      answer_d: "65 years",
      correct_answer: "c",
    },
    {
      id: 4,
      question: " What is the total number of High Courts in India?",
      answer_a: "24",
      answer_b: "22",
      answer_c: "25",
      answer_d: "23",
      correct_answer: "c",
    },
  ];

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: "",
    answers: [],
    showResults: false,
    error: "",
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentQuestion, currentAnswer, answers, showResults, error } = state;

  const question = questions[currentQuestion];

  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className="error">{error}</div>;
  };

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct text-emerald-500">Correct</span>;
    }

    return <span className="failed text-red-500">Failed</span>;
  };

  const renderResultsData = () => {
    return answers.map((answer) => {
      const question = questions.find(
        (question) => question.id === answer.questionId
      );

      return (
        <div
          className="flex flex-col gap-2 justify-center items-center"
          key={question.id}
        >
          <span>
            {question.question} - {renderResultMark(question, answer)}
          </span>
        </div>
      );
    });
  };

  const restart = () => {
    dispatch({ type: RESET_QUIZ });
  };

  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: "Please select an option" });
      return;
    }

    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });

    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: SET_CURRENT_QUESTION,
        currentQuestion: currentQuestion + 1,
      });
      return;
    }

    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };

  if (showResults) {
    return (
      <div className="container results flex flex-col gap-4 justify-center items-center">
        <h2>Results</h2>
        <ul>{renderResultsData()}</ul>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
        <button onClick={() => (window.location.href = "/")}>
          Go to Dashboard
        </button>
      </div>
    );
  } else {
    return (
      <QuizContext.Provider value={{ state, dispatch }}>
        <div className="container">
          <Progress total={questions.length} current={currentQuestion + 1} />
          <Question />
          {renderError()}
          <Answers />
          <button className="btn btn-primary" onClick={next}>
            Confirm and Continue
          </button>

          <button onClick={() => (window.location.href = "/")}>
            Go to Dashboard
          </button>
        </div>
      </QuizContext.Provider>
    );
  }
}

export default Quiz;
