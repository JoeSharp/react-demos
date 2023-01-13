import React from "react";

// Properties it expects

// What state it maintains

interface Props {
  thingIAmCounting: string;
}

const Counter: React.FC<Props> = ({ thingIAmCounting }) => {
  const [count, setCount] = React.useState<number>(0);

  const increment = React.useCallback(() => {
    setCount((c) => c + 1); // Function body, generate the new value, based on the old value
  }, [setCount]); // Dependency Array

  const decrement = React.useCallback(() => {
    setCount((c) => c - 1);
  }, [setCount]);

  return (
    <div>
      <h4>This is a counter of {thingIAmCounting}</h4>
      <p>Count is: {count}</p>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
