import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import classes from "../Loading/Loading.module.scss";

function Loading() {
  return (
    <div className={classes.loading}>
      <FadeLoader color={"#CD177C"}/>
    </div>
  );
}
export default Loading;
