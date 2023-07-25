import { Button } from "../Button";

export default function Questions({
  questions,
  handleSubmitAnswer,
  currentQuestion,
  handleAnswer,
  questionsLeft,
}) {
  return (
    <div className="text-xl">
      <div className="flex justify-center p-8 border-2 border-slate-500">
        <h1>
          Questions left:{" "}
          <span className="text-2xl bold text-yellow-600">
            {" "}
            {questionsLeft}
          </span>
        </h1>
      </div>
      <div className="p-14 text-center ">
        <h1 className="p-4 text-2xl">Question {Number(currentQuestion) + 1}</h1>
        <h1 className="p-4 text-lg">{questions[currentQuestion]?.question}</h1>
        <div>
          {questions[currentQuestion]?.alternatives.map((alternative, i) => (
            <button
              onClick={handleAnswer}
              key={i}
              value={alternative}
              className="p-4 m-2 border-2 hover:bg-gray-200 rounded focus:border-2 focus:border-yellow-400  focus:bg-gray-300"
            >
              {alternative}
            </button>
          ))}
        </div>
      </div>
      <div className="text-center">
        <div>
          <Button
            type="button"
            onClick={handleSubmitAnswer}
            className="p-4 bg-yellow-300 text-2xl hover:bg-yellow-400 border-2 hover:border-transparent m-2 rounded duration-200"
          >
            Submit Answer
          </Button>
        </div>
      </div>
    </div>
  );
}
