import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartQuickView } from "./ShoppingCartQuickView";

export const Navigation = () => {
  return (
    <article
      style={{
        margin: 0,
        position: "sticky",
        top: 0,
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 20 }}>Alledrogo</h1>
        <ul>
          <li>Products</li>
          <li>Cart</li>
          <li>Orders</li>
          <li>Exercises</li>
          <li>
            <ShoppingCartQuickView />
          </li>
        </ul>
      </nav>
    </article>
  );
};
