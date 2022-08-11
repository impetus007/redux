// import { configureStore } from "@reduxjs/toolkit";

// const reducer = (state = { counter: 0 }, action) => {
//   //synchronous function
//   // we should not mutate the original state

//   if (action.type === "INC") {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === "DEC") {
//     return { counter: state.counter - 1 };
//   }
//   if (action.type === "ADD") {
//     return { counter: state.counter + action.payload };
//   }
//   return state;
// };

// const store = configureStore({ reducer });

// export default store;

// Redux ToolKit
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
       state.counter++;
    },
    decrement(state, action) {
       state.counter--;
    },
    add(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
