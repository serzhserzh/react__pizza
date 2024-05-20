export type StateItemCart = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
  itemCount: number;
};

export interface StateCartSice {
  item: StateItemCart[];
  totalPrice: number;
  totalCount: number;
}
