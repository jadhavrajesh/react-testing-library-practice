import React from "react";

const CounterTwo = ({ count, incrementHandler, decrementHandler }) => {
  return (
    <>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {incrementHandler &&
      <button onClick={incrementHandler}>Increment Count</button>}
      {decrementHandler &&
      <button onClick={decrementHandler}>Decrement Count</button>}
    </>
  );
};

export default CounterTwo;
