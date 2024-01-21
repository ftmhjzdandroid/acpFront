import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";
import { TreeDataModel } from "../../models/treeModel/tree-infoModel";

export const cpartyType = createApi({
  reducerPath: "cpartyType",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    cpartyTypeFetch: builder.query<
      ResponseModel<TreeDataModel[]>,
      { keyword: null | string }
    >({
      query: ({ keyword }) => ({
        url: URLS.CPARTY_TYPE,
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

export const { useLazyCpartyTypeFetchQuery } = cpartyType;
