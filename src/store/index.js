import { createStore } from "redux";

const defaultState = {
  counter: 0,
  showCounter: false,
};
const reducerFunction = (state = defaultState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  } else if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  } else {
    return defaultState;
  }
};

const store = createStore(reducerFunction);

export default store;
