import { useState } from "react";

function App() {
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);

  const numbers: number[] = [];

  for (let i = 1; i <= 90; i += 1) {
    numbers.push(i);
  }

  function callNextNumber(): void {
    const random = Math.floor(Math.random() * 90) + 1;

    if (calledNumbers.includes(random)) {
      callNextNumber();
    } else {
      setCalledNumbers([...calledNumbers, random]);
    }
  }

  function reset(): void {
    setCalledNumbers([]);
  }

  return (
    <div className="bingo-machine">
      <div className="bingo-board">
        {numbers.map((i) => (
          <div
            className={`bingo-board-cell ${
              calledNumbers.includes(i) ? "bingo-board-cell--called" : ""
            }`}
            key={i}
          >
            {i}
          </div>
        ))}
      </div>

      <button onClick={callNextNumber}>Call</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
