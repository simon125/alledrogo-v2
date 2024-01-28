import React from "react";

export const AGrandChild = ({ setState }) => {
  return (
    <article>
      <p>AGrandChild</p>

      <button
        onClick={() => setState((prevCounterState) => prevCounterState + 1)}
      >
        +1
      </button>
    </article>
  );
};
