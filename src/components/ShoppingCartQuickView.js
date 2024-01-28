import React, { useState } from "react";
import { ShoppingCartIcon } from "../assets";

export const ShoppingCartQuickView = () => {
  const [showQuickView, setShowQuickView] = useState(false);

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
              <tr>
                <td>iPhone</td>
                <td>1</td>
                <td>2000$</td>
              </tr>
              <tr>
                <td>komputer</td>
                <td>1</td>
                <td>2000$</td>
              </tr>
              <tr>
                <td>iPhone</td>
                <td>1</td>
                <td>2000$</td>
              </tr>
              <tr>
                <td>komputer</td>
                <td>1</td>
                <td>2000$</td>
              </tr>
              <tr>
                <td></td>
                <td>Total:</td>
                <td>4000$</td>
              </tr>
            </tbody>
          </table>
          <button>Wyczyść koszyk</button>
        </article>
      )}
    </div>
  );
};
