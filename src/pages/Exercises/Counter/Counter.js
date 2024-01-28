import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { increment, addCustomValue } from "../../../redux/CounterSlice";

export const Counter = () => {
  const [customValue, setCustomValue] = useState(0);
  const counterValue = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <article>
      <h2>Counter</h2>
      <p>
        Wartość countera: <b>{counterValue}</b>
      </p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +1
      </button>
      <input
        value={customValue}
        onChange={({ target }) => setCustomValue(target.value)}
        type="number"
        placeholder="Enter custom value"
      />
      <button
        onClick={() => {
          if (!!customValue) {
            dispatch(addCustomValue(customValue));
          }
        }}
      >
        Add custom value
      </button>
    </article>
  );
};
