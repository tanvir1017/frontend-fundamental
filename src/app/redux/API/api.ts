import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    // TODO: A property of query builder
    getTodos: builder.query({
      // TODO: A property of query builder callback object as function
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodosQuery } = tasksApi;
