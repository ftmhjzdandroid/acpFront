import { createApi } from "@reduxjs/toolkit/query/react";
import { InitializeModel } from "./model";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";

export const initializeApi = createApi({
  reducerPath: "initializeApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    initializeApi: builder.mutation<ResponseModel<InitializeModel>, void>({
      query: () => ({
        url: URLS.INIT,
        method: "POST",
        body: {},
      }),
      transformResponse: (response: ResponseModel<InitializeModel>) => {
        return response;
      },
    }),
  }),
});

export const { useInitializeApiMutation } = initializeApi;
