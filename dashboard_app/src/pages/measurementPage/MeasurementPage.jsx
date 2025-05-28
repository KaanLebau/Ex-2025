/** @format */

import React from "react";
import "./measurementPage.scss";
import { useState } from "react";
import { PageOptionComponent } from "../../components/pageOptionsComponent/PageOptionComponent";
import { ConstructionPage } from "../constructionPage/ConstructionPage";
import { useSelector } from "react-redux";

export function MeasurementPage(props) {
  const options = ["Senaste", "Rigg", "Historiskt"];
  const { activeMachine } = useSelector((state) => state.machines);

  function getContent() {
    switch (activeOption) {
      case "Senaste":
        return (
          <ConstructionPage
            page={`Mätreultat for ${activeMachine.name} Senaste artikel`}
          />
        );
      case "Rigg":
        return (
          <ConstructionPage
            page={`Mätreultat for ${activeMachine.name} rigg artikel`}
          />
        );
      case "Historiskt":
        return (
          <ConstructionPage
            page={`Mätreultat Historiskt for ${activeMachine.name}`}
          />
        );
      default:
        break;
    }
  }
  const [activeOption, setActiveOption] = useState(
    localStorage.getItem("measurementSelectedOption") || null
  );
  return (
    <div className="measurementPageContainer">
      <PageOptionComponent
        options={options}
        storageKey="measurementSelectedOption"
        selection={setActiveOption}
      />
      {getContent()}
    </div>
  );
}
