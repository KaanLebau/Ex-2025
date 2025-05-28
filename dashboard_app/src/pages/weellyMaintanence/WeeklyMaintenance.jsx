/** @format */

import "./weeklyMaintenance.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWeeklyTasks,
  updateWeeklyMaintenanceData,
} from "../../redux/slices/weeklyMaintanenceSlice";
import { PageOptionComponent } from "../../components/pageOptionsComponent/PageOptionComponent";
import { TableComponent } from "../tableComponent/TableComponent";

export function WeeklyMaintenance(props) {
  const dispatch = useDispatch();
  const { activeMachine } = useSelector((state) => state.machines);
  const { weeklyMaintenanceData, loading, error } = useSelector(
    (state) => state.weeklyMaintenance
  );
  const [machineFU, setMachineFU] = useState({});
  const [selected, setSelected] = useState("Line");

  useEffect(() => {
    if (!weeklyMaintenanceData || weeklyMaintenanceData.length === 0) {
      dispatch(fetchWeeklyTasks());
    }
  }, [dispatch, weeklyMaintenanceData]);

  useEffect(() => {
    if (activeMachine && Array.isArray(weeklyMaintenanceData)) {
      const foundMachine = weeklyMaintenanceData.find(
        (machine) => machine.machineId === activeMachine.id
      );
      setMachineFU(foundMachine ? foundMachine : {});
    }
  }, [activeMachine, weeklyMaintenanceData]);

  const machineColumns = [
    { label: "Task", field: "task", type: "text", editable: false },
    {
      label: "Status",
      field: "status",
      type: "select",
      options: ["ok", "nok", ""],
      editable: true,
    },
    { label: "Utförd", field: "check", type: "checkbox", editable: true },
    { label: "Klocka", field: "clock", type: "text", editable: false },
    { label: "Kommentar", field: "comment", type: "input", editable: true },
    {
      label: "Position Standard",
      field: "std",
      type: "link",
      onClick: (task) => alert(`Länk till position standart`),
    },
  ];

  const lineColumns = [
    { label: "Maskin", field: "machineName", type: "text", editable: false },
    { label: "Uppgift", field: "task", type: "text", editable: false },
    {
      label: "Status",
      field: "status",
      type: "select",
      options: ["ok", "nok"],
      editable: false,
    },
    { label: "Utförd", field: "check", type: "checkbox", editable: false },
    { label: "Klocka", field: "clock", type: "text", editable: false },
    { label: "Kommentar", field: "comment", type: "input", editable: false },
  ];
  const handleUpdate = (rowIndex, field, value) => {
    setMachineFU((prev) => {
      if (!prev.tasks) return prev; // ✅ Prevent error if tasks is undefined

      const updatedTasks = prev.tasks.map((task, index) =>
        index === rowIndex ? { ...task, [field]: value } : task
      );

      return { ...prev, tasks: updatedTasks }; // ✅ Ensure the new object contains tasks
    });
  };

  function addingMachineToTasks() {
    return weeklyMaintenanceData.flatMap((machine) =>
      machine.tasks.map((task) => ({
        ...task,
        machineName: machine.machineName,
      }))
    );
  }
  function getLineFUCard() {
    const lineData = addingMachineToTasks();
    return (
      <div className="getMachineFUCard">
        <div className="tableContainer">
          {machineFU.tasks && (
            <TableComponent columns={lineColumns} data={lineData} />
          )}
        </div>
      </div>
    );
  }
  function getMachineFUCard() {
    return (
      <div className="getMachineFUCard">
        <div className="tableContainer">
          {machineFU.tasks && (
            <TableComponent
              columns={machineColumns}
              data={machineFU.tasks}
              onUpdate={handleUpdate}
            />
          )}
        </div>
      </div>
    );
  }
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  useEffect(() => {
    console.log(machineFU);
  }, [machineFU]);
  return (
    <div className="weeklyMaintenanceContainer">
      <PageOptionComponent
        options={["Line", "Machine"]}
        selection={setSelected}
        parentActive={selected}
      />
      <h2 className="weeklyMaintenanceTitle">
        {selected === "Machine"
          ? `Veckostop för ${machineFU.machineName}`
          : "Veckostop för Line"}
      </h2>
      {activeMachine && (
        <div className="weeklyMaintenanceContent">
          {selected === "Machine" ? getMachineFUCard() : getLineFUCard()}
        </div>
      )}
    </div>
  );
}
