import React, { useState } from "react";
import { AGrandParent } from "./AGrandParent";
import { BGrandParent } from "./BGrandParent";

export const PropsDrilling = () => {
  const [state, setState] = useState(2);
  return (
    <article>
      <h2>Props Drilling</h2>

      <label>
        State
        <input type="text" value={state} readOnly />
      </label>

      <div style={{ display: "flex", gap: 20 }}>
        <AGrandParent />
        <BGrandParent />
      </div>
    </article>
  );
};
