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
      <div className="bingo-caller">
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

        <div className="bingo-controls">
          <h1>Bingo</h1>

          <h2>Number Selected</h2>
          <div className="number-display">
            {calledNumbers[calledNumbers.length - 1] ?? "0"}
          </div>

          <h2>Total Called</h2>
          <div className="number-display">{calledNumbers.length}</div>

          <button
            onClick={callNextNumber}
            disabled={calledNumbers.length === numbers.length}
          >
            Call
          </button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
