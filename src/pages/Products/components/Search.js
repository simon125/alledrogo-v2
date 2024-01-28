import React from "react";

export const Search = () => {
  return (
    <article style={{ display: "flex", gap: 20 }}>
      <input type="text" placeholder="Search" />
      <input type="number" placeholder="Min price" />
      <input type="number" placeholder="Max price" />
    </article>
  );
};
