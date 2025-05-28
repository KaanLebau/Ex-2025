/** @format */

import "./ufo5SPage.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDailyControlTasks,
  fetchUfoTasks,
  toggleTaskChecked,
  completeDailyControlTask,
} from "../../redux/slices/ufoSlice";
import { getCurrentShift } from "../../util/shiftUtil";

export function Ufo5SPage() {
  const dispatch = useDispatch();
  const selectedLine = useSelector((state) => state.line.line);
  const currentShift = getCurrentShift();

  const { ufoTasks, dailyControlTasks, checkedTasks, loading, error } =
    useSelector((state) => state.ufo);

  useEffect(() => {
    if (!selectedLine) return;
    dispatch(fetchUfoTasks());
    dispatch(fetchDailyControlTasks());
  }, [selectedLine, dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  const handleTaskCompletion = (taskId, status) => {
    dispatch(
      completeDailyControlTask({ taskId, status, signingShift: currentShift })
    );
  };

  function getTaskRows() {
    return ufoTasks.map((task, index) => (
      <tr
        key={index}
        className={
          checkedTasks[task.machineId + task.task] ? "checked-row" : ""
        }
      >
        <td>
          <input
            type="checkbox"
            checked={!!checkedTasks[task.machineId + task.task]}
            onChange={() =>
              dispatch(toggleTaskChecked(task.machineId + task.task))
            }
          />
        </td>
        <td>
          <select
            onChange={(e) =>
              handleTaskCompletion(task.machineId + task.task, e.target.value)
            }
          >
            <option value="">Välj Status</option>
            <option value="ok">✔ OK</option>
            <option value="nok">❌ NOK</option>
            <option value="fylld">🟢 Fylld</option>
          </select>
        </td>
        <td>{task.machineId}</td>
        <td>{task.machineName || "Unknown Machine"}</td>
        <td>{task.type}</td>
        <td>{task.task}</td>
        <td>{task.date || "Ej utförd"}</td>
      </tr>
    ));
  }

  function getDailyControlRows() {
    return dailyControlTasks.map((task, index) => (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            checked={!!checkedTasks[task.machineName + task.task]}
            onChange={() =>
              dispatch(toggleTaskChecked(task.machineName + task.task))
            }
          />
        </td>
        <td>
          <select
            onChange={(e) =>
              handleTaskCompletion(task.machineName + task.task, e.target.value)
            }
          >
            <option value="">Välj Status</option>
            <option value="ok">✔ OK</option>
            <option value="nok">❌ NOK</option>
            <option value="fylld">🟢 Fylld</option>
          </select>
        </td>
        <td>{task.machineName || "Unknown Machine"}</td>
        <td>{task.type}</td>
        <td>{task.task}</td>
        <td>{task.date || "Ej utförd"}</td>
      </tr>
    ));
  }

  return (
    <div className="ufo5sPageContainer">
      <h2 className="tableTitle">UFO 5S Kontrolluppgifter</h2>
      <table className="ufoTaskTable">
        <thead>
          <tr>
            <th>Utförd</th>
            <th>Status</th>
            <th>Sv nummer</th>
            <th>Maskine</th>
            <th>Type</th>
            <th>Uppgift</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>{getTaskRows()}</tbody>
      </table>

      <h2 className="tableTitle">Daglig tillsyn</h2>
      <table className="ufoTaskTable">
        <tbody>{getDailyControlRows()}</tbody>
      </table>
    </div>
  );
}
