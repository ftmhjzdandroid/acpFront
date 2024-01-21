import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";
import { CpartyDataType } from "./model";

export const cpartyApi = createApi({
  reducerPath: "cpartyApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    cpartySearch: builder.mutation<
      ResponseModel<CpartyDataType[]>,
      { keyword: string }
    >({
      query: ({ keyword }) => ({
        url: URLS.CPARTY_SEARCH,
        method: "POST",
        body: {
          searchClasue: {
            nationalNumber: keyword,
          },
        },
      }),
      transformResponse: (response: ResponseModel<CpartyDataType[]>) => {
        return {
          resCode: response.resCode,
          resMessage: response.resMessage,
          info: response.info?.map((p) => [{ ...p, isSelected: false }]).flat(),
        };
      },
    }),
  }),
});

export const { useCpartySearchMutation } = cpartyApi;
