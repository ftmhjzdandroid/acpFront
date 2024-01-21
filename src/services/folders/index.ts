import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";
import { IFolderResModel, ISaveFaqModel } from "./model";

export const folderApi = createApi({
  reducerPath: "folderApi",
  baseQuery: baseQuery,
  tagTypes: ["fetchFolder"],
  endpoints: (builder) => ({
    fetchFolder: builder.query<
      ResponseModel<IFolderResModel[]>,
      { parentItemId?: number | null }
    >({
      query: ({ parentItemId }) => ({
        url: URLS.FETCH_FOLDER,
        method: "POST",
        body: { parentItemId },
      }),
      providesTags: ["fetchFolder"],
    }),
    saveFolder: builder.mutation<
      ResponseModel,
      {
        actionMode: "save" | "update";
        name: string;
        parentItemId?: string | null;
        itemId?: string | null;
      }
    >({
      query: ({ actionMode, name, parentItemId, itemId }) => ({
        url: actionMode === "save" ? URLS.SAVE_FOLDER : URLS.UPDATE_FOLDER,
        method: "POST",
        body: { name, parentItemId, itemId },
      }),
      invalidatesTags: (result) => {
        if (result?.resCode === 1) return ["fetchFolder"];
        else return [];
      },
    }),
    deleteFolder: builder.mutation<ResponseModel, { itemId: string | null }>({
      query: (data) => ({
        url: URLS.DELETE_FOLDER,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["fetchFolder"],
    }),
    fetchFaq: builder.query<ResponseModel, { itemId: string }>({
      query: ({ itemId }) => ({
        url: URLS.FETCH_FAQ,
        method: "POST",
        body: { itemId },
      }),
    }),
    saveFaq: builder.mutation<
      ResponseModel,
      { actionMode: "save" | "update"; data: ISaveFaqModel }
    >({
      query: ({ actionMode, data }) => ({
        url: actionMode === "save" ? URLS.SAVE_FAQ : URLS.UPDATE_FAQ,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["fetchFolder"],
    }),
    deleteFaq: builder.mutation<ResponseModel, { itemId: string }>({
      query: (data) => ({
        url: URLS.DELETE_FAQ,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["fetchFolder"],
    }),
    moveFaq: builder.mutation<
      ResponseModel,
      { itemId: string; destItemId: string }
    >({
      query: ({ itemId, destItemId }) => ({
        url: URLS.MOVE_FAQ,
        method: "POST",
        body: { itemId, destItemId },
      }),
      invalidatesTags: ["fetchFolder"],
    }),
  }),
});

export const {
  useSaveFolderMutation,
  useLazyFetchFolderQuery,
  useDeleteFolderMutation,
  useSaveFaqMutation,
  useLazyFetchFaqQuery,
  useDeleteFaqMutation,
  useMoveFaqMutation,
} = folderApi;
