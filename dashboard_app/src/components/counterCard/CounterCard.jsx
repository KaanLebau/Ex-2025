/** @format */

import "./counterCard.scss";
import React from "react";

export function CounterCard({ title, count }) {
  return (
    <div className="counterCardContainer">
      <p className="counterCardTitle">{title}</p>
      <p className="counterCardValue">{count}</p>
    </div>
  );
}
