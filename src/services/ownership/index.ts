import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";
import { IOwnershipModel } from "./model";

export const ownerShipApi = createApi({
  reducerPath: "ownerShipApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    ownership: builder.query<ResponseModel<IOwnershipModel[]>, void>({
      query: () => ({
        url: URLS.OWNERSHIP,
        method: "POST",
        body: {},
      }),
    }),
    subOwnership: builder.mutation<
      ResponseModel<IOwnershipModel[]>,
      { itemId: string }
    >({
      query: ({ itemId }) => ({
        url: URLS.SUB_OWNERSHIP,
        method: "POST",
        body: { itemId },
      }),
    }),
  }),
});

export const { useLazyOwnershipQuery, useSubOwnershipMutation } = ownerShipApi;
