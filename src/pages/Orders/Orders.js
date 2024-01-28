import React from "react";

export const Orders = () => {
  return (
    <article>
      <h1>Zamówienia</h1>
      <p>W tej chwili masz 2 aktywne zamówienia</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cena</th>
            <th>Data zakupu</th>
            <th>Akcja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>233edewd</td>
            <td>2000$</td>
            <td>20.20.2020</td>
            <td>Anuluj</td>
          </tr>
          <tr>
            <td>233edewd</td>
            <td>2000$</td>
            <td>20.20.2020</td>
            <td>Anuluj</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};
