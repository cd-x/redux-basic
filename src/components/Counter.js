import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  const incrementHandler = useCallback(() => {
    const action = { type: "INCREMENT" };
    dispatch(action);
  }, [dispatch]);

  const decrementHandler = useCallback(
    () => dispatch({ type: "DECREMENT" }),
    [dispatch]
  );
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={decrementHandler}>-</button>
      <button onClick={incrementHandler}>+</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
