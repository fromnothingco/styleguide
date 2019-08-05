import React from "react";
import If from "../if";

export const Loader = props => (
  <>
    <If case={props.case}>
      <div className="loader">{props.loadingicon || "loading"}</div>
    </If>
  </>
);

export const Done = props => (
  <>
    <If case={props.case}>
      <div className="done">{props.doneicon || "done"}</div>
    </If>
  </>
);

export default Loader;
