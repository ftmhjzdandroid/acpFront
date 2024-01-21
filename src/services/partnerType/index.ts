import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";
import { TreeDataModel } from "../../models/treeModel/tree-infoModel";

export const partnerType = createApi({
  reducerPath: "partnerType",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    partnerTypeFetch: builder.query<
      ResponseModel<TreeDataModel[]>,
      { keyword: null | string }
    >({
      query: ({ keyword }) => ({
        url: URLS.PARTNER_TYPE,
        method: "POST",
        body: {
          searchClasue: {
            keyword,
          },
        },
      }),
    }),
  }),
});

export const { useLazyPartnerTypeFetchQuery } = partnerType;
