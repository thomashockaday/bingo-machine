import { useState } from "react";

function App() {
  const [calledNumbers] = useState<number[]>([10]);

  const numbers: number[] = [];

  for (let i = 1; i <= 90; i += 1) {
    numbers.push(i);
  }

  return (
    <div className="bingo-machine">
      <div className="bingo-board">
        {numbers.map((i) => (
          <div
            className={`bingo-board-cell ${
              calledNumbers.includes(i) ? "bingo-board-cell--called" : ""
            }`}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
