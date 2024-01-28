import React from "react";
import { BParent } from "./BParent";

export const BGrandParent = () => {
  return (
    <article style={{ background: "brown", width: "100%" }}>
      <p>BGrandParent</p>
      <BParent />
    </article>
  );
};
