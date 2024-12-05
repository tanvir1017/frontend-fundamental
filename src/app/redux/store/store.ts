import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter-slice";
import todoReducer from "../features/todo/todo-slice";
import { Logger } from "../middleware/logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
