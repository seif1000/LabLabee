import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const URL = "http://localhost:3000/api/v1/labs";

export interface Lab {
  _id?: string;
  name: string;
  technology: string;
  start_date: Date;
  end_date: Date;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: URL,

    ///  prepareHeaders: (headers, { getState }) => {},
  }),
  tagTypes: ["Labs"],

  endpoints: (builder) => ({
    getAllLabs: builder.query<Array<Lab>, null>({
      query: () => ({ url: "/" }),
      providesTags: ["Labs"],
    }),
    createPost: builder.mutation<Lab, Lab>({
      query: (credentials) => ({
        url: "/create",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Labs"],
    }),
  }),
});

export const { useGetAllLabsQuery, useCreatePostMutation } = api;
