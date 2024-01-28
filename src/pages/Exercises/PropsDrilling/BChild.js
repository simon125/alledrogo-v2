import React from "react";
import { BGrandChild } from "./BGrandChild";

export const BChild = () => {
  return (
    <article style={{ background: "gray" }}>
      <p>BChild</p>
      <BGrandChild />
    </article>
  );
};
