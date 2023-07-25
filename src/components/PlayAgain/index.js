import { Button } from "../Button";

export default function PlayAgain({ questions, score, handlePlayAgain }) {
  const percentage = (score / questions.length) * 100;

  return (
    <div className="flex flex-col items-center text-2xl p-20">
      <h1>
        You scored {score} out of {questions.length}
      </h1>
      <h1>Your score is: {percentage}</h1>
      <Button
        type="button"
        onClick={handlePlayAgain}
        className="p-4 bg-yellow-300 text-2xl hover:bg-yellow-400 border-2 hover:border-transparent m-2 rounded duration-200"
      >
        Play again
      </Button>
    </div>
  );
}
