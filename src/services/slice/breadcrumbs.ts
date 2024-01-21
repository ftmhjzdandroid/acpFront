import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BreadcrumbsState {
  links: { text: string; to?: string }[];
}

const initialState: BreadcrumbsState = {
  links: [{ text: "صفحه اصلی", to: "/" }],
};

export const breadcrumbsSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    onChangeLinks: (
      state,
      action: PayloadAction<{ links: { text: string; to?: string }[] }>
    ) => {
      state.links = action.payload.links;
    },
  },
});

export const { onChangeLinks } = breadcrumbsSlice.actions;

export const breadcrumbsState = (state: RootState) => state.breadcrumbs;

export default breadcrumbsSlice.reducer;
