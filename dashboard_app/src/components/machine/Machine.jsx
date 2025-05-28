/** @format */

import { StateLights } from "../stateLights/StateLights";
import "./machine.scss";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { appModel } from "../../model/appModel";
import { CounterCard } from "../counterCard/CounterCard";
import { KpiCard } from "../kpiCard/KpiCard";

export function Machine(props) {
  const { activeMachine } = useSelector((state) => state.machines);
  const [machine, setMachine] = useState(null);
  const [loadingMachine, setLoadingMachine] = useState(true);
  const [showTempInfo, setShowTempInfo] = useState(false);
  const navigate = useNavigate();
  const { line, avd } = useParams();

  //const currentLine = window.appModel.getOrganisation("line");

  // ✅ Function to fetch machine data
  async function getMachineData() {
    if (!activeMachine) return; // Prevent fetching if no activeMachine
    try {
      setLoadingMachine(true);
      // ✅ Fetch machine data
      const fetchedMachine = await appModel.getMachineById(activeMachine.id);
      setMachine(fetchedMachine);

      // ✅ Fetch UFO tasks for this machine
      const machineTasks = await appModel.fetchUfoTaskByMachine(
        line,
        machine.id
      );
      setUfoTasks(machineTasks); // Assuming you have a state to store tasks
    } catch (error) {
      console.error("Error fetching machine or tasks:", error);
    } finally {
      setLoadingMachine(false);
    }
  }

  // ✅ Fetch data when activeMachine changes
  useEffect(() => {
    getMachineData();
  }, [activeMachine]);

  if (!activeMachine) {
    return <h1>Välj en maskin</h1>;
  }
  if (loadingMachine || !machine) {
    return <h1>Loading machine data...</h1>;
  }

  function toolColumn(tools, chunkSize = 6) {
    const chunked = [];
    for (let i = 0; i < tools.length; i += chunkSize) {
      chunked.push(tools.slice(i, i + chunkSize));
    }
    return chunked;
  }
  function getTools() {
    const column = toolColumn(machine?.tools || [], 4);
    return column.map((group, colIndex) => (
      <div className="toolColumn" key={colIndex}>
        <>
          <p className="colInfo">pos. : no : ll</p>
        </>
        {group.map((tool, rowIndex) => getToolRow(tool, rowIndex))}
      </div>
    ));
  }
  function getToolRow(tool, index) {
    return (
      <div className="toolRow" key={index}>
        <p className="theTool">
          {tool.position && tool.position} : {tool.toolNumber} : {tool.toolLife}
        </p>
      </div>
    );
  }
  console.log(machine);
  return (
    <div className="machineContainer">
      <div className="machineContentTop">
        {/* Left Side - Machine State & Data */}
        <div className="machineDetails">
          <div className="stateIndicator">
            <StateLights state={machine.state} />
          </div>
          <div className="machineData">
            <div className="machineMetaData">
              <h3>{machine.name}</h3>
              <p>{machine.id}</p>
            </div>

            <div className="machineButtons">
              <div className="artHurWrapper">
                <button
                  onClick={() => navigate(`/avd/${avd}/line/${line}/arthur`)}
                >
                  ArtHur
                </button>
              </div>
              <button
                onClick={() =>
                  navigate(`/avd/DXMS/line/ham/avs`, {
                    state: {
                      machineId: machine.id,
                      machineName: machine.name,
                      line: line,
                    },
                  })
                }
              >
                Starta ÅVS
              </button>
              <div className="temporaryInfoWrapper">
                <button
                  disabled={machine.temporaryInfo.length === 0}
                  onClick={() => setShowTempInfo(!showTempInfo)}
                >
                  {machine?.temporaryInfo?.length === 0
                    ? "No Temp Info"
                    : `Temp Info (${machine?.temporaryInfo.length})`}
                </button>
              </div>
            </div>
            <KpiCard kpi={machine.ct} value={machine.lastCt} />
          </div>
        </div>
        {/* Right Side - Gray Placeholder */}
        <div className="machineLayout"> Layout Placeholder</div>
      </div>
      <div className="machineContentMiddle">
        <div className="toolsContainer">
          <p className="toolsContainerTitle">Verktygs livslängder</p>
          <div className="toolLifeList">{getTools()}</div>
        </div>

        <CounterCard title="Verktygs byte tid" count={machine.toolChangeTime} />
        <CounterCard
          title="Manuell mätnings tid"
          count={machine.manuallyQualityCheckTime}
        />
        <CounterCard title="Utanför line" count={machine.missingPart} />
        <CounterCard
          title="Nästa mätbit"
          count={machine.measurement.nextMeasurement}
        />
      </div>
      <div className="machineContentBottom">this is the bottom</div>
    </div>
  );
}
