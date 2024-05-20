import { createSlice } from "@reduxjs/toolkit";
import { StateReqSlice } from "./types";
import { fetchPizzas } from "./asyncActions";

const initialState: StateReqSlice = {
  items: [],
  loading: true,
  totalPages: 0,
};

export const reqPizzaSlice = createSlice({
  name: "reqPizzaSlice",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalPages = action.payload.meta.total_pages;
        state.loading = false;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const { setItems } = reqPizzaSlice.actions;

export default reqPizzaSlice.reducer;
