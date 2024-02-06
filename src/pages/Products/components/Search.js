import React, { useState } from "react";
import {
  setMaxPrice,
  setMinPrice,
  setSearch,
} from "../../../redux/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";

export const Search = () => {
  const [phrase, setPhrase] = useState("");

  const dispatch = useDispatch();
  // const filters = useSelector((state)=>state.products.filters);
  const { search, minPrice, maxPrice } = useSelector(
    (state) => state.products.filters
  );

  return (
    <article style={{ display: "flex", gap: 20 }}>
      <input
        value={search}
        onChange={(event) => dispatch(setSearch(event.target.value))}
        type="text"
        placeholder="Search"
      />
      {/* <input value={phrase} onChange={()=>setPhrase("test")} type="text" placeholder="Search" /> */}
      <input
        value={minPrice}
        onChange={(event) => dispatch(setMinPrice(event.target.value))}
        type="number"
        placeholder="Min price"
      />
      <input
        value={maxPrice}
        onChange={(event) => dispatch(setMaxPrice(event.target.value))}
        type="number"
        placeholder="Max price"
      />
    </article>
  );
};
