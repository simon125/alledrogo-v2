import React from "react";
import { AChild } from "./AChild";

export const AParent = ({ state, setState }) => {
  return (
    <article>
      <p>AParent</p>
      <AChild state={state} setState={setState} />
    </article>
  );
};
