import React from "react";
import { AGrandChild } from "./AGrandChild";

export const AChild = () => {
  return (
    <article style={{ background: "green" }}>
      <p>AChild</p>
      <p>Current State: {2}</p>
      <AGrandChild />
    </article>
  );
};
