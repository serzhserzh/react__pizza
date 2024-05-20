import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StateFitersSlice } from "./types";

const initialState: StateFitersSlice = {
  typeCategory: 0,
  typeSort: 0,
  pageCurrent: 0,
};

export const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<number>) => {
      state.typeCategory = action.payload;
      state.pageCurrent = 0;
    },
    changeSort: (state, action: PayloadAction<number>) => {
      state.typeSort = action.payload;
      state.pageCurrent = 0;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pageCurrent = action.payload;
    },
    setFilters: (state, action: PayloadAction<StateFitersSlice>) => {
      state.typeSort = action.payload.typeSort;
      state.typeCategory = action.payload.typeCategory;
      state.pageCurrent = action.payload.pageCurrent;
    },
  },
});
export const { changeCategory, changeSort, setPage, setFilters } =
  filters.actions;

export default filters.reducer;
