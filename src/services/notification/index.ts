import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { IFetchNoticModel, IPinNoticModel, ISaveNoticModel } from "./model";
import { URLS } from "../urls";
import { NotificationModel } from "../../models";
import { toast } from "react-toastify";
import { newNoticeInitialData } from "./../slice/default-values";

export const saveNotificationApi = createApi({
  reducerPath: "saveNotificationApi",
  baseQuery: baseQuery,
  tagTypes: ["fetchNotic"],
  endpoints: (builder) => ({
    fetchNotic: builder.query<
      ResponseModel<{ notifications: NotificationModel[]; totalCount: number }>,
      IFetchNoticModel
    >({
      query: (data) => ({
        url: URLS.FETCH_NOTIC,
        method: "POST",
        body: data,
      }),
      providesTags: ["fetchNotic"],
    }),

    saveNotic: builder.mutation<
      ResponseModel,
      { mode: "save" | "update"; data: ISaveNoticModel }
    >({
      query: ({ mode, data }) => ({
        url: mode === "save" ? URLS.SAVE_NOTIC : URLS.UPDATE_NOTIC,
        method: "POST",
        body: data,
      }),
    }),

    deleteNotic: builder.mutation<ResponseModel, { itemIds: string[] }>({
      query: ({ itemIds }) => ({
        url: URLS.DELETE_NOTIC,
        method: "POST",
        body: { itemIds },
      }),
      invalidatesTags: ["fetchNotic"],
    }),

    activeNotic: builder.mutation<ResponseModel, IPinNoticModel>({
      query: ({ itemIds, status }) => ({
        url: URLS.ACTIVE_NOTIC,
        method: "POST",
        body: { itemIds, status },
      }),
      invalidatesTags: ["fetchNotic"],
    }),

    pinNotic: builder.mutation<ResponseModel, IPinNoticModel>({
      query: ({ itemIds, status }) => ({
        url: URLS.PIN_NOTIC,
        method: "POST",
        body: { itemIds, status },
      }),
      invalidatesTags: ["fetchNotic"],
    }),
    fetchNoticeDetail: builder.mutation<NotificationModel, { itemId: string }>({
      query: ({ itemId }) => ({
        url: URLS.FETCH_NOTICE_DETAIL,
        method: "POST",
        body: { itemId },
      }),
      transformResponse: (response: ResponseModel<NotificationModel>) => {
        if (response.resCode !== 1) {
          toast.error(response.resMessage);
          return newNoticeInitialData;
        }
        return response.info ?? newNoticeInitialData;
      },
    }),
  }),
});

export const {
  useSaveNoticMutation,
  useLazyFetchNoticQuery,
  useDeleteNoticMutation,
  useActiveNoticMutation,
  usePinNoticMutation,
  useFetchNoticeDetailMutation,
} = saveNotificationApi;
