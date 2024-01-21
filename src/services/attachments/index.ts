import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";

export const downloadAttachApi = createApi({
  reducerPath: "downloadAttachApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    downloadAttach: builder.mutation<
      ResponseModel<{ fileBase64: string }>,
      { attachmentItemId: string }
    >({
      query: ({ attachmentItemId }) => ({
        url: URLS.DOWNLOAD_ATTACHMENT,
        method: "POST",
        body: { attachmentItemId },
      }),
    }),
  }),
});

export const { useDownloadAttachMutation } = downloadAttachApi;
