import React, { useState } from "react";
import { ShoppingCartIcon } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../redux/ProductsSlice";

export const ShoppingCartQuickView = () => {
  const [showQuickView, setShowQuickView] = useState(false);

  const cart = useSelector((state) => state.products.cart);

  const dispatch = useDispatch();

  return (
    <div style={{ position: "relative" }}>
      <ShoppingCartIcon
        style={{ marginLeft: 10, cursor: "pointer" }}
        onClick={() => setShowQuickView((p) => !p)}
      />
      <small
        style={{
          position: "absolute",
          background: "#19B3E6",
          borderRadius: 20,
          color: "#fff",
          top: -10,
          left: 24,
          fontWeight: "bold",
          fontSize: 12,
          width: 26,
          height: 26,
          lineHeight: "26px",
          textAlign: "center",
        }}
      >
        4
      </small>
      {showQuickView && (
        <article
          style={{
            position: "absolute",
            top: 20,
            right: 0,
            width: 500,
            minHeight: 300,
            border: "4px solid #11191F",
            padding: 40,
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ title, price, amount, id }) => (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{amount}</td>
                  <td>{price}$</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>Total:</td>
                <td>
                  {cart.reduce((acc, el) => acc + el.price * el.amount, 0)}$
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => {
              dispatch(resetCart());
            }}
          >
            Wyczyść koszyk
          </button>
        </article>
      )}
    </div>
  );
};
