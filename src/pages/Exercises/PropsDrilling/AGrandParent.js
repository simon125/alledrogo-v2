import React from "react";
import { AParent } from "./AParent";

export const AGrandParent = () => {
  return (
    <article style={{ background: "blue", width: "100%" }}>
      <p>AGrandParent</p>
      <AParent />
    </article>
  );
};
