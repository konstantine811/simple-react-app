import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import todoReducer from "./slices/todoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
