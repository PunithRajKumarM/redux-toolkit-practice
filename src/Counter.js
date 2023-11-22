import React from "react";
import { counterActions } from "./store/index";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase(10));
  };
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrease}>Increase by 10</button>
      </div>
      <h2>{counter}</h2>
    </div>
  );
}
