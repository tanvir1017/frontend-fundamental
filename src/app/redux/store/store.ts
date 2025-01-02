import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "../API/api";
import counterReducer from "../features/counter/counter-slice";
import todoReducer from "../features/todo/todo-slice";
export const store = configureStore({
  reducer: {
    // TODO: Add the generated reducer at top-level of slice
    [tasksApi.reducerPath]: tasksApi.reducer,
    counter: counterReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
