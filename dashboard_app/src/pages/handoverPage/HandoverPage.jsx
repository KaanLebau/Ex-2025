/** @format */

import { useEffect, useState } from "react";

import { Handover } from "../../components/handover/Handover";
import { PageOptionComponent } from "../../components/pageOptionsComponent/PageOptionComponent";
import { ConstructionPage } from "../constructionPage/ConstructionPage";

export function HandoverPage() {
  const options = ["Skriv", "Läs", "Historiskt"];
  const [activeOption, setActiveOption] = useState(
    localStorage.getItem("handoverSelectedOption") || null
  );

  function getContent() {
    switch (activeOption) {
      case "Skriv":
        return <Handover />;
      case "Läs":
        return <ConstructionPage page="Reading handover document" />;
      case "Historiskt":
        return <ConstructionPage page="Showing  handover documents list " />;

      default:
        break;
    }
  }
  return (
    <>
      <PageOptionComponent
        options={options}
        storageKey="handoverSelectedOption"
        selection={setActiveOption}
      />
      {getContent()}
    </>
  );
}
