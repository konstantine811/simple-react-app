import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    addTask(state, action) {
      state.data.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
