import React from "react";
// import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import {
  Categories,
  Sort,
  PizzaBlock,
  Skeleton,
  Pagination,
} from "../components";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { changeCategory, setPage, setFilters } from "../redux/filter/slice";
import { fetchPizzas } from "../redux/items/asyncActions";
import { selectFilter } from "../redux/filter/selectors";
import { selectItems } from "../redux/items/selectors";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { items, loading, totalPages } = useSelector(selectItems);

  const { typeSort, typeCategory, pageCurrent } = useSelector(selectFilter);
  const sortIndex = typeSort;
  const categoryIndex = typeCategory;

  const setCategoryIndex = React.useCallback((index: number) => {
    dispatch(changeCategory(index));
  }, []);

  const setPageCurrent = React.useCallback((index: number) => {
    dispatch(setPage(index));
  }, []);

  const SortItem = ["-rating", "price", "-price", "title"];

  const searchRef = React.useRef(false);
  const isMountedRef = React.useRef(false);

  const fetchPizza = async () => {
    dispatch(fetchPizzas({ pageCurrent, categoryIndex, sortIndex, SortItem }));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const { sortIndex, categoryIndex, pageCurrent } = qs.parse(
        window.location.search.substring(1)
      );
      if (sortIndex !== "0" && categoryIndex !== "0" && pageCurrent !== "0") {
        const _params = {
          typeSort: Number(sortIndex),
          typeCategory: Number(categoryIndex),
          pageCurrent: Number(pageCurrent),
        };
        dispatch(setFilters(_params));
        searchRef.current = true;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!searchRef.current) {
      fetchPizza();
    }
    searchRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryIndex, sortIndex, pageCurrent]);

  React.useEffect(() => {
    if (isMountedRef.current) {
      const queryString = qs.stringify({
        sortIndex,
        categoryIndex,
        pageCurrent,
      });
      navigate(`?${queryString}`);
    }
    isMountedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryIndex, sortIndex, pageCurrent]);

  return (
    <>
      <Categories
        categoryIndex={categoryIndex}
        setCategoryIndex={(index) => {
          setCategoryIndex(index);
        }}
      />
      <div className="content__top">
        <h2 className="content__title">Все пиццы</h2>
        <Sort />
      </div>
      <div className="content__items">
        {loading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
      <Pagination
        totalPages={totalPages}
        pageCurrent={pageCurrent}
        setPageCurrent={(index) => {
          setPageCurrent(index);
        }}
      />
    </>
  );
};
export default Home;
