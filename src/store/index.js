import { createSlice, configureStore } from "@reduxjs/toolkit";

const defaultState = {
  counter: 0,
  showCounter: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: defaultState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/**
 * in case of multiple slice/reducers pass map as value to reducer
 * e.g. reducer: {reducerName1: slice1.reducer, reducerName2: slice2.reducer}
 * and RTK will take care of combinig it
 */
const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
