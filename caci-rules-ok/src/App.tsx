import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => setCount((c) => c + 1), [setCount]);

  return (
    <div className="container">
      <h1>Hello CACI</h1>
      <p>This is a story all about how</p>

      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default App;
