import axios from "axios";
import { fetchPizzasArgs, resultFetchPizzas } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk<resultFetchPizzas, fetchPizzasArgs>(
  "fetchPizzas",
  async ({ pageCurrent, categoryIndex, sortIndex, SortItem }) => {
    const { data } = await axios.get<resultFetchPizzas>(
      `https://50f3287c32d8c49e.mokky.dev/catalog?page=${
        pageCurrent + 1
      }&limit=8&${
        categoryIndex === 0 ? "" : "category=" + categoryIndex
      }&sortBy=${SortItem[sortIndex]}`
    );
    return data;
  }
);
