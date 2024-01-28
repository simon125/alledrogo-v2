import React from "react";
import { AGrandChild } from "./AGrandChild";

export const AChild = ({ state, setState }) => {
  return (
    <article style={{ background: "green" }}>
      <p>AChild</p>
      <p>Current State: {state}</p>
      <AGrandChild setState={setState} />
    </article>
  );
};
