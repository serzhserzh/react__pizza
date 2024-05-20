import { configureStore } from "@reduxjs/toolkit";
import Filters from "./filter/slice";
import { useDispatch } from "react-redux";
import Cart from "./cart/slice";
import reqPizzaSlice from "./items/slice";

export const store = configureStore({
  reducer: {
    Filters,
    Cart,
    reqPizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
