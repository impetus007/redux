import { configureStore } from "@reduxjs/toolkit";

const reducer = (state = { counter: 10 }, action) => {
  //synchronous function
  // we should not mutate the original state

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

const store = configureStore({ reducer });

export default store;
