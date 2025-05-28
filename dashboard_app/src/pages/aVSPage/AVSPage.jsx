/** @format */

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./avsPage.scss";
import { PageOptionComponent } from "../../components/pageOptionsComponent/PageOptionComponent";
import { ConstructionPage } from "../constructionPage/ConstructionPage";

export function AVSPage(props) {
  const activeMachine = useSelector((state) => state.machines.activeMachine);
  const options = ["Starta", "Läs", "Historiskt"];
  const responsibility = ["op", "tl", "vt", "uh/el", "uh/mek"];
  const [taskList, setTaskList] = useState([]);
  const [activeOption, setActiveOption] = useState(
    localStorage.getItem("avsSelectedOption") || null
  );

  useEffect(() => {
    getContent();
  }, [activeOption]);

  function addTask(task) {
    setTaskList((prevTasks) => [...prevTasks, task]);
  }

  function getContent() {
    switch (activeOption) {
      case "Starta":
        return writeContent();
      case "Läs":
        return <ConstructionPage page="ÅVS reading document page" />;
      case "Historiskt":
        return <ConstructionPage page="List of ÅVS documents page" />;

      default:
        break;
    }
  }

  function writeContent() {
    return (
      <div className="avsPageWriteContent">
        <div className="avsWriteBaseInformation">
          This is the base information
        </div>
        <div className="avsWriteTaskList">here is the task list</div>
        <div className="avsWriteTaskForm">
          this is the form for adding or updating tasks
        </div>
        <div className="virtualKeyboardPlaceholder">Keyboard placeholder</div>
      </div>
    );
  }

  return (
    <div className="aVSPageContainer">
      <PageOptionComponent
        options={options}
        storageKey="avsSelectedOption"
        selection={setActiveOption}
      />

      <div className="avsPageContent">{getContent()}</div>
    </div>
  );
}
