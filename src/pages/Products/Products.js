import React from "react";
import { ProductsList } from "./components/ProductsList";
import { Search } from "./components/Search";

export const Products = () => {
  return (
    <>
      <Search />
      <ProductsList />
    </>
  );
};
