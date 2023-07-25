import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex flex-col h-full text-2xl text-center justify-center items-center">
        <h1 className="p-4">Wellcome to Quiz Wizards</h1>
        <p className="p-6">
          This project was built for learning puporses. You can check other
          repositores of mine on{" "}
          <span className="bg-green-200 px-2 rounded hover:bg-green-300">
            <Link href="https://github.com/felipeNardi09" target="_blank">
              https://github.com/felipeNardi09
            </Link>
          </span>{" "}
          and/or contact me on linkedin:{" "}
          <span className="bg-green-200 px-2 rounded hover:bg-green-300">
            {" "}
            <Link href="https://www.linkedin.com/in/felipe-nardi-bbb30097/">
              linkedin.com/in/felipe-nardi-bbb30097/
            </Link>
          </span>
        </p>

        <Link
          href="/quiz"
          className="bg-yellow-300 hover:bg-yellow-400 p-2 w-[14em] rounded "
        >
          Start Playing
        </Link>
      </div>
    </main>
  );
}
