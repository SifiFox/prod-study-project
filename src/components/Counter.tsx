import React from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button className={classes.btn} onClick={increment}>
        inc
      </button>
      {count}
      <button onClick={decrement}>dec</button>
    </>
  );
};
