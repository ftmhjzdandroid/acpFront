import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";
import { TreeDataModel } from "../../models/treeModel/tree-infoModel";

export const licenseType = createApi({
  reducerPath: "licenseType",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    licenseTypeFetch: builder.query<
      ResponseModel<TreeDataModel[]>,
      { keyword: null | string }
    >({
      query: ({ keyword }) => ({
        url: URLS.LICENSE_TYPE,
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

export const { useLazyLicenseTypeFetchQuery } = licenseType;
