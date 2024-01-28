import React, { useState } from "react";
import { AGrandParent } from "./AGrandParent";
import { BGrandParent } from "./BGrandParent";

import IMG from "./scren.png";

export const PropsDrilling = () => {
  const [state, setState] = useState(2);
  return (
    <article>
      <h2>Props Drilling</h2>
      <img src={IMG} alt="" />
      <label>
        State
        <input type="text" value={state} readOnly />
      </label>

      <div style={{ display: "flex", gap: 20 }}>
        <AGrandParent state={state} setState={setState} />
        <BGrandParent state={state} setState={setState} />
      </div>
    </article>
  );
};
