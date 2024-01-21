import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";
import { PartnerDataType } from "../../models";

export const partnerApi = createApi({
  reducerPath: "partnerApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    partnerSearch: builder.mutation<
      ResponseModel<PartnerDataType[]>,
      { keyword: string }
    >({
      query: ({ keyword }) => ({
        url: URLS.PARTNER_SEARCH,
        method: "POST",
        body: {
          searchClasue: {
            nationalNumber: keyword,
          },
        },
      }),
      transformResponse: (response: ResponseModel<PartnerDataType[]>) => {
        return {
          resCode: response.resCode,
          resMessage: response.resMessage,
          info: response.info?.map((p) => [{ ...p, isSelected: false }]).flat(),
        };
      },
    }),
  }),
});

export const { usePartnerSearchMutation } = partnerApi;
