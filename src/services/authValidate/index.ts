import { createApi } from "@reduxjs/toolkit/query/react";
import { AuthValidateModel } from "./model";
import { baseQuery } from "../base.query";
import { ResponseModel } from "../response-model";
import { URLS } from "../urls";

const ssoToken: string = localStorage.getItem("S3OJWT") ?? "";
const cwh = `${window.screen.width}-${window.screen.height}`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    authValidate: builder.mutation<ResponseModel<AuthValidateModel>, void>({
      query: () => ({
        url: URLS.VALIDATE,
        method: "POST",
        body: { ssoToken: ssoToken, cwh: cwh },
      }),
    }),
  }),
});

export const { useAuthValidateMutation } = authApi;
