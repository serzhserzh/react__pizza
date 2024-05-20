import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StateCartSice, StateItemCart } from "./types";
import { getCartLocalStorage } from "../../utils/LocalStorageCart";

const { item, totalPrice, totalCount } = getCartLocalStorage();

const initialState: StateCartSice = {
  item,
  totalPrice,
  totalCount,
};

export const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<StateItemCart>) {
      let found = false;
      state.totalCount++;
      state.item.map(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type &&
          (item.itemCount++, (found = true))
      );
      !found ? state.item.push(action.payload) : (found = !found);
      state.totalPrice = state.item.reduce((sum, obj) => {
        return sum + obj.price * obj.itemCount;
      }, 0);
    },
    cartClear(state) {
      state.item.length = 0;
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    itemCountPlus(
      state,
      action: PayloadAction<{
        id: number;
        size: number;
        type: string;
      }>
    ) {
      state.item.map(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type &&
          item.itemCount++
      );
      state.totalCount++;
      state.totalPrice = state.item.reduce((sum, obj) => {
        return sum + obj.price * obj.itemCount;
      }, 0);
    },
    itemCountMinus(
      state,
      action: PayloadAction<{
        id: number;
        size: number;
        type: string;
        itemCount: number;
      }>
    ) {
      if (action.payload.itemCount > 0) {
        state.item.map(
          (item) =>
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.type === action.payload.type &&
            item.itemCount--
        );
        state.totalCount--;
        state.totalPrice = state.item.reduce((sum, obj) => {
          return sum + obj.price * obj.itemCount;
        }, 0);
      }
    },
    removeItem(
      state,
      action: PayloadAction<{
        id: number;
        size: number;
        type: string;
      }>
    ) {
      state.item.map(
        (obj, index) =>
          obj.id === action.payload.id &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type &&
          ((state.totalCount = state.totalCount - obj.itemCount),
          state.item.splice(index, 1))
      );
      state.totalPrice = state.item.reduce((sum, obj) => {
        return sum + obj.price * obj.itemCount;
      }, 0);
    },
  },
});

export const { addItem, cartClear, itemCountPlus, itemCountMinus, removeItem } =
  Cart.actions;

export default Cart.reducer;
