import React from "react";
import { AParent } from "./AParent";

// 1) export const AGrandParent = ({ state, setState}) => {
// 2) export const AGrandParent = (props) => {
export const AGrandParent = (props) => {
  // <AGrandParent state={state} setState={setState} />
  const { state, setState } = props;
  return (
    <article style={{ background: "blue", width: "100%" }}>
      <p>AGrandParent</p>
      <AParent state={state} setState={setState} />
    </article>
  );
};
