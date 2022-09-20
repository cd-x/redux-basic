import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { authReducer } from "./auth";

/**
 * in case of multiple slice/reducers pass map as value to reducer
 * e.g. reducer: {reducerName1: slice1.reducer, reducerName2: slice2.reducer}
 * and RTK will take care of combinig it
 */
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
