import { useContext } from "react";
import Answer from "./Answer";
import QuizContext from "../context/QuizContext";

function Answers() {
  const { state, dispatch } = useContext(QuizContext);
  const { currentAnswer, currentQuestion, questions } = state;
  const question = questions[currentQuestion];

  return (
    <div className="flex justify-center w-full m-6">
      <div className="flex flex-col justify-center gap-4 items-start w-[70%] ml-12">
        <Answer
          letter="a"
          answer={question.answer_a}
          dispatch={dispatch}
          selected={currentAnswer === "a"}
        />
        <Answer
          letter="b"
          answer={question.answer_b}
          dispatch={dispatch}
          selected={currentAnswer === "b"}
        />
        <Answer
          letter="c"
          answer={question.answer_c}
          dispatch={dispatch}
          selected={currentAnswer === "c"}
        />
        <Answer
          letter="d"
          answer={question.answer_d}
          dispatch={dispatch}
          selected={currentAnswer === "d"}
        />
      </div>
    </div>
  );
}

export default Answers;
