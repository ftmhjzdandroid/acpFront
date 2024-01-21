import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BurgerMenuState {
  burgerMenuIsOpen: boolean;
}

const initialState: BurgerMenuState = {
  burgerMenuIsOpen: false,
};

export const burgerMenuSlice = createSlice({
  name: "burgerMenuSlice",
  initialState,
  reducers: {
    onOpenBurgerMenu: (
      state,
      action: PayloadAction<{ burgerMenuIsOpen: boolean }>
    ) => {
      state.burgerMenuIsOpen = action.payload.burgerMenuIsOpen;
    },
  },
});

export const { onOpenBurgerMenu } = burgerMenuSlice.actions;

export const burgerMenuState = (state: RootState) => state.burgerMenu;

export default burgerMenuSlice.reducer;
