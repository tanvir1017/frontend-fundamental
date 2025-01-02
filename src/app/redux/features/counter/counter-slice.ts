import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  count: number;
};

const initialState: TInitialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByFive: (state, action: PayloadAction<{ value: number }>) => {
      const { value } = action.payload;
      state.count = state.count + value;
    },
    decrementByFive: (state, action: PayloadAction<{ value: number }>) => {
      const { value } = action.payload;
      state.count = state.count - value;
    },
  },
});

export const { decrement, increment, incrementByFive, decrementByFive } =
  counterSlice.actions;

export default counterSlice.reducer;
