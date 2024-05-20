export type fetchPizzasArgs = {
  pageCurrent: number;
  categoryIndex: number;
  sortIndex: number;
  SortItem: string[];
};
export type resultFetchPizzas = {
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
  items: StateItemsReq[];
};
export type StateItemsReq = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};
export interface StateReqSlice {
  items: StateItemsReq[];
  loading: boolean;
  totalPages: number;
}
