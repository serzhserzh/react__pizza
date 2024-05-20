import React from "react";
import { useWhyDidYouUpdate } from "ahooks";
type CategoriesProps = {
  categoryIndex: number;
  setCategoryIndex: (index: number) => void;
};

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = ({
  categoryIndex,
  setCategoryIndex,
}) => {
  useWhyDidYouUpdate("categories", { categoryIndex, setCategoryIndex });
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={item}
            onClick={() => setCategoryIndex(index)}
            className={categoryIndex === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
