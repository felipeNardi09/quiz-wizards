"use client";
import { useState } from "react";
import PlayAgain from "../PlayAgain";
import Questions from "../Questions";

const quiz = [
  {
    category: "geopolitics",
    question: "Which country is the largest oil producer in the world?",
    alternatives: ["Saudi Arabia", "United States", "Russia", "China"],
    answer: "United States",
    briefDescription:
      "The United States is currently the largest oil producer in the world, surpassing Saudi Arabia and Russia.",
  },
  {
    category: "entertainment",
    question:
      'Who won the Academy Award for Best Actor in 2020 for his role in the movie "Joker"?',
    alternatives: [
      "Leonardo DiCaprio",
      "Brad Pitt",
      "Joaquin Phoenix",
      "Robert De Niro",
    ],
    answer: "Joaquin Phoenix",
    briefDescription:
      'Joaquin Phoenix won the Academy Award for Best Actor in 2020 for his outstanding performance in the movie "Joker."',
  },
  {
    category: "geopolitics",
    question: "Which city is the capital of Canada?",
    alternatives: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: "Ottawa",
    briefDescription:
      "Ottawa is the capital city of Canada, located in the province of Ontario.",
  },
  {
    category: "entertainment",
    question: "Which film won the Best Picture award at the 2019 Oscars?",
    alternatives: [
      "Parasite",
      "1917",
      "Joker",
      "Once Upon a Time in Hollywood",
    ],
    answer: "Parasite",
    briefDescription:
      'The South Korean film "Parasite" directed by Bong Joon-ho won the Best Picture award at the 2019 Oscars.',
  },
  {
    category: "geopolitics",
    question:
      "Which country is NOT a permanent member of the United Nations Security Council?",
    alternatives: ["United States", "China", "Russia", "India"],
    answer: "India",
    briefDescription:
      "India is not a permanent member of the United Nations Security Council. The permanent members are the United States, China, Russia, the United Kingdom, and France.",
  },
  {
    category: "entertainment",
    question: 'Who wrote the novel "To Kill a Mockingbird"?',
    alternatives: [
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
      "Harper Lee",
      "J.D. Salinger",
    ],
    answer: "Harper Lee",
    briefDescription:
      'Harper Lee wrote the influential novel "To Kill a Mockingbird," which was published in 1960 and explores themes of racial inequality and injustice.',
  },
  {
    category: "geopolitics",
    question: "Which African country was formerly known as Abyssinia?",
    alternatives: ["Ethiopia", "Kenya", "Nigeria", "Tanzania"],
    answer: "Ethiopia",
    briefDescription:
      "Ethiopia was formerly known as Abyssinia, a name that was commonly used until the country officially changed its name in 1931.",
  },
  {
    category: "entertainment",
    question:
      'Which actor played the character Michael Corleone in "The Godfather" trilogy?',
    alternatives: [
      "Marlon Brando",
      "Al Pacino",
      "Robert De Niro",
      "James Caan",
    ],
    answer: "Al Pacino",
    briefDescription:
      'Al Pacino portrayed the character Michael Corleone in "The Godfather" trilogy, directed by Francis Ford Coppola.',
  },

  {
    category: "geopolitics",
    question: "Which country is located at the southernmost point of Africa?",
    alternatives: ["South Africa", "Namibia", "Botswana", "Angola"],
    answer: "South Africa",
    briefDescription:
      "South Africa is located at the southernmost point of the African continent, known for its diverse wildlife and cultural heritage.",
  },
  {
    category: "entertainment",
    question: 'Who directed the film "Inception"?',
    alternatives: [
      "Christopher Nolan",
      "Steven Spielberg",
      "Martin Scorsese",
      "Quentin Tarantino",
    ],
    answer: "Christopher Nolan",
    briefDescription:
      'Christopher Nolan directed the mind-bending science fiction film "Inception," released in 2010.',
  },
];

export function QuizComponent() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsLeft, setQuestionsLeft] = useState(questions.length);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmitAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((current) => Number(current) + 1);
      setQuestionsLeft((curr) => curr - 1);
    }

    if (answer === questions[currentQuestion].answer) {
      setScore((curr) => curr + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setShowScore(true);
    }
  };
  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setQuestionsLeft(questions.length);
    setAnswer("");
    setScore(0);
    setShowScore(false);
  };

  const handleAnswer = (e) => {
    e.preventDefault();

    setAnswer(e.target.value);
  };
  console.log(score, answer);
  return (
    <>
      {showScore ? (
        <PlayAgain
          questions={questions}
          score={score}
          handlePlayAgain={handlePlayAgain}
        />
      ) : (
        <Questions
          questions={questions}
          currentQuestion={currentQuestion}
          questionsLeft={questionsLeft}
          score={score}
          handleSubmitAnswer={handleSubmitAnswer}
          handleAnswer={handleAnswer}
        />
      )}
      ;
    </>
  );
}
