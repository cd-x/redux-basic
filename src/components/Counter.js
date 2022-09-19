import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = useCallback(() => {
    const action = counterActions.increment();
    dispatch(action);
  }, [dispatch]);

  const decrementHandler = useCallback(
    () => dispatch(counterActions.decrement()),
    [dispatch]
  );

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={decrementHandler}>-</button>
      <button onClick={incrementHandler}>+</button>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
