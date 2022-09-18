import { createStore } from "redux";

const defaultState = {
  counter: 0,
};
const reducerFunction = (state = defaultState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } else {
    return defaultState;
  }
};

const store = createStore(reducerFunction);

export default store;
