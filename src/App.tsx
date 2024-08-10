function App() {
  const numbers = [];

  for (let i = 1; i <= 90; i += 1) {
    numbers.push(i);
  }

  return (
    <div className="bingo-machine">
      <div className="bingo-board">
        {numbers.map((i) => (
          <div className="bingo-board-cell">{i}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
