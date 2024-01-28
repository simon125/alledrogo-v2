import React from "react";
import { Counter } from "./Counter/Counter";
import { PropsDrilling } from "./PropsDrilling/PropsDrilling";

export const Exercises = () => {
  return (
    <>
      <article>
        <h2>Lecture & Exercises</h2>
        <ul>
          <li>Setup reduxa</li>
          <li>Props Drilling</li>
          <li>Counter</li>
        </ul>
      </article>
      <article>
        <h2>Setup Reduxa</h2>
      </article>
      <PropsDrilling />
      <Counter />
    </>
  );
};
