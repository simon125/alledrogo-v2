import React from "react";

export const OrderSummary = () => {
  return (
    <article>
      <h2>Twój koszyk</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iphone</td>
            <td>
              <input
                type="number"
                defaultValue={2}
                style={{ margin: 0, width: 150 }}
              />
            </td>
            <td>2000$</td>
          </tr>
          <tr>
            <td>Kpmputer</td>
            <td>
              <input
                type="number"
                defaultValue={1}
                style={{ margin: 0, width: 150 }}
              />
            </td>
            <td>1000$</td>
          </tr>
          <tr>
            <td></td>
            <td style={{ textAlign: "right" }}>
              <b>Total:</b>
            </td>
            <td>1000$</td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "flex-end",
          marginTop: 100,
        }}
      >
        <button style={{ width: "fit-content" }}>Zamawiam</button>
        <button style={{ width: "fit-content" }}>Anuluj zamówienie</button>
      </div>
    </article>
  );
};
