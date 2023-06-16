import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const URL = "http://localhost:3000/api/v1/labs";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: URL,

    ///  prepareHeaders: (headers, { getState }) => {},
  }),
  tagTypes: ["Labs"],

  endpoints: (builder) => ({
    getAllLabs: builder.query<any, null>({
      query: () => ({ url: "/" }),
      providesTags: ["Labs"],
    }),
  }),
});

export const { useGetAllLabsQuery } = api;
