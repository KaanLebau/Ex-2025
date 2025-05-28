/** @format */

import React from "react";
import "./constructionPage.scss";

export function ConstructionPage(props) {
  return (
    <div className="constructionPageContainer">
      <p>This is placeholder page for</p>
      <p>{props.page}</p>
    </div>
  );
}
