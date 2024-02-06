import React, { useEffect } from "react";

import { Product } from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/ProductsSlice";

import "./ProductsList.scss";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const { list, isLoading, isError, filters } = useSelector(
    (state) => state.products
  );
  const { search, maxPrice, minPrice } = filters;

  useEffect(() => {
    /**
     * POBRAĆ DANE PO WEJŚCIU NA TĄ STRONE
     */
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isError) {
    return (
      <article>
        <p>Coś poszło nie tak! Skontaktuj się z ADMINEM</p>
      </article>
    );
  }

  if (isLoading) {
    return <article style={{ padding: 50 }} aria-busy={isLoading}></article>;
  }

  const listToDisplay = list
    .filter((product) =>
      product.title.toLowerCase().match(search.toLowerCase())
    )
    .filter((product) =>
      minPrice === "" ? true : product.price * 1 >= minPrice * 1
    )
    .filter((product) =>
      maxPrice === "" ? true : product.price * 1 <= maxPrice * 1
    );

  return (
    <article className="products-list-container">
      {listToDisplay.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </article>
  );
};
