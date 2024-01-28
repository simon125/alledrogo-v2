import React from "react";
import { increment } from "../../../redux/CounterSlice";

import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  // CounterSlice.js
  // const counterSlice = createSlice({
  //   initialState: {
  //     value: 0,
  //     trelemorele: []
  //   },

  // const tablicaTrelemorele =  useSelector((state)=>state.counter.trelemorele);
  // możemy wyciągnąć cały obiekt counter jeżeli potrzebujemy
  // const całyStanCountera = useSelector((state) => state.counter);

  const counter = useSelector((state) => state.counter.value); // słowo value dlatego że nazwa klucza w tym kawałku stanu też jest słowem value

  // useDispatch zwraca funckje która pozwala dispatchować akcje stworzne w slice-ach
  const dispatch = useDispatch();

  return (
    <article>
      <h2>Counter</h2>
      <p>
        Wartość countera: <b>{counter}</b>
      </p>
      <button
        onClick={() => {
          /**
           * Dispatch akcji increment
           */
          dispatch(increment());
        }}
      >
        +1
      </button>
    </article>
  );
};
