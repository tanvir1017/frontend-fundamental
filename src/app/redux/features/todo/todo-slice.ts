import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  todos: string[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: () => {
      console.log("hello");
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
