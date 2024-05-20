import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { StateItemCart } from "../../redux/cart/types";
import { addItem } from "../../redux/cart/slice";

type PizzaBlockProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};
const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [pizzaSizeActive, setPizzaSizeActive] = React.useState(0);

  const [typesNamesActive, setTypesNamesActive] = React.useState(0);

  const [itemCountCart, setItemCountCart] = React.useState(0);

  const typesNames = ["тонкое", "традиционное"];

  const dispath = useDispatch();
  const item = useSelector((state: RootState) => state.Cart.item);

  React.useEffect(() => {
    const _item = item.filter((obj) => obj.id === id);
    if (_item.length > 0) {
      const itemCountBlock = _item.reduce(
        (acc, item) => acc + item.itemCount,
        0
      );
      setItemCountCart(itemCountBlock);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  const addItemCart = () => {
    const obj: StateItemCart = {
      id,
      title,
      price,
      imageUrl,
      size: sizes[pizzaSizeActive],
      type: typesNames[typesNamesActive],
      itemCount: 1,
    };
    dispath(addItem(obj));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((value, index) => (
            <li
              key={value}
              onClick={() => {
                setTypesNamesActive(index);
              }}
              className={index === typesNamesActive ? "active" : ""}
            >
              {typesNames[value]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setPizzaSizeActive(index);
              }}
              className={index === pizzaSizeActive ? "active" : ""}
            >
              {item} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          onClick={() => {
            addItemCart();
          }}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {item && itemCountCart > 0 && <i>{itemCountCart}</i>}
        </div>
      </div>
    </div>
  );
};
export default PizzaBlock;
