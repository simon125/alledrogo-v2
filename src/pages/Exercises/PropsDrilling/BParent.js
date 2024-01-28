import React from "react";
import { BChild } from "./BChild";

export const BParent = () => {
  return (
    <article>
      <p>BParent</p>
      <p>Current State: {2}</p>
      <BChild />
    </article>
  );
};
