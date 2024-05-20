import { StateItemCart } from "../redux/cart/types";

export const getCartItemsLocalStorage = () => {
  const localStorageItem = window.localStorage.getItem("cart");
  return localStorageItem ? JSON.parse(localStorageItem) : [];
};

export const getCartTotaPriceLocalStorage = () => {
  const localStorageItem = window.localStorage.getItem("cart");
  if (localStorageItem) {
    const _localStorageItem: StateItemCart[] = JSON.parse(localStorageItem);
    return _localStorageItem.reduce((acc, obj) => {
      return acc + obj.price * obj.itemCount;
    }, 0);
  } else return 0;
};

export const getCartTotaCountLocalStorage = () => {
  const localStorageItem = window.localStorage.getItem("cart");
  if (localStorageItem) {
    const _localStorageItem: StateItemCart[] = JSON.parse(localStorageItem);
    return _localStorageItem.reduce((acc, obj) => {
      return acc + obj.itemCount;
    }, 0);
  } else return 0;
};

export const getCartLocalStorage = () => {
  const localStorageItem = window.localStorage.getItem("cart");
  if (localStorageItem) {
    const localStorageItemParse: StateItemCart[] = JSON.parse(localStorageItem);
    const localStorageTotalPrice: number = localStorageItemParse.reduce(
      (acc, obj) => {
        return acc + obj.price * obj.itemCount;
      },
      0
    );
    const localStorageTotalCount: number = localStorageItemParse.reduce(
      (acc, obj) => {
        return acc + obj.itemCount;
      },
      0
    );

    return {
      totalPrice: localStorageTotalPrice,
      totalCount: localStorageTotalCount,
      item: localStorageItemParse,
    };
  } else
    return {
      totalPrice: 0,
      totalCount: 0,
      item: [],
    };
};
