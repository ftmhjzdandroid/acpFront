import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";
import { GeoResultModel } from "../../models/geoInfo";

export const geoApi = createApi({
  reducerPath: "geoApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    geoFetch: builder.mutation<
      ResponseModel<GeoResultModel[]>,
      { parentId: null | number; isUrban: boolean }
    >({
      query: ({ parentId, isUrban }) => ({
        url: URLS.GEOINFO,
        method: "POST",
        body: {
          isUrban,
          parentId,
        },
      }),
    }),
  }),
});

export const { useGeoFetchMutation } = geoApi;
