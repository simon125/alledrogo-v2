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
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/order-summary">Cart</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>
          <li>
            <ShoppingCartQuickView />
          </li>
        </ul>
      </nav>
    </article>
  );
};
