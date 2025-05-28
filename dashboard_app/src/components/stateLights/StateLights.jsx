/** @format */

import React from "react";
import "./stateLights.scss";

export function StateLights(props) {
  return (
    <div className="stateLightsContainer">
      <div className={`theLight ${props.state & 8 ? "redOn" : "redOff"}`}></div>
      <div
        className={`theLight ${props.state & 4 ? "yellowOn" : "yellowOff"}`}
      ></div>
      <div
        className={`theLight ${props.state & 2 ? "greenOn" : "greenOff"}`}
      ></div>
      <div
        className={`theLight ${props.state & 1 ? "whiteOn" : "whiteOff"}`}
      ></div>
    </div>
  );
}
