/** @format */
import "./artHurPage.scss";
import { useState } from "react";
import { PageOptionComponent } from "../../components/pageOptionsComponent/PageOptionComponent";
import { ConstructionPage } from "../constructionPage/ConstructionPage";
export function ArtHurPage(props) {
  const options = [
    "Mekanisk rigg",
    "Verktygs layout",
    "Rig kvitto",
    "Kvalite dokument",
    "Kvalite styrning",
  ];

  function getContent() {
    switch (activeOption) {
      case "Mekanisk rigg":
        return <ConstructionPage page="Arthur Mekanisk rigg document" />;
      case "Verktygs layout":
        return <ConstructionPage page="Arthur Verktygs layout document" />;
      case "Rig kvitto":
        return <ConstructionPage page="Arthur  Rig kvitto document " />;
      case "Kvalite dokument":
        return <ConstructionPage page="Arthur  Kvalite dokument document " />;
      case "Kvalite styrning":
        return <ConstructionPage page="Arthur  Kvalite styrning document " />;
      default:
        break;
    }
  }
  const [activeOption, setActiveOption] = useState(
    localStorage.getItem("arthurSelectedOption") || null
  );
  return (
    <div className="artHurPageContainer">
      <PageOptionComponent
        options={options}
        storageKey="arthurSelectedOption"
        selection={setActiveOption}
      />
      {getContent()}
    </div>
  );
}
