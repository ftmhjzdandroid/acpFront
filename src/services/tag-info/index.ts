import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";
import { TagType } from "../../models";

export const tagListApi = createApi({
  reducerPath: "tagListApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    taglis: builder.query<ResponseModel<TagType[]>, void>({
      query: () => ({
        url: URLS.TAG_LIST,
        method: "POST",
        body: {},
      }),
    }),
  }),
});

export const { useLazyTaglisQuery } = tagListApi;
