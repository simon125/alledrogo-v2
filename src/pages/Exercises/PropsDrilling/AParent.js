import React from "react";
import { AChild } from "./AChild";

export const AParent = () => {
  return (
    <article>
      <p>AParent</p>
      <AChild />
    </article>
  );
};
