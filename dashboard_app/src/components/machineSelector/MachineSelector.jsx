/** @format */

import { useState, useEffect } from "react";
import "./machineSelector.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMachineList,
  setActiveMachine,
} from "../../redux/slices/machineSlice";

export function MachineSelector({ list }) {
  // Variables
  const navigate = useNavigate();
  const { avd, line } = useParams();
  const dispatch = useDispatch();
  const { machineList, activeMachine, loading, error } = useSelector(
    (state) => state.machines
  );

  useEffect(() => {
    if (machineList.length === 0 && !loading) {
      dispatch(fetchMachineList());
    }
  }, [dispatch, machineList.length, loading]);

  function handleMachineSelection(machine) {
    dispatch(setActiveMachine(machine));
  }

  function getMachines() {
    return machineList.map((machine) => (
      <button
        key={machine.id}
        className={`machineButton ${
          activeMachine?.id === machine.id ? "active" : ""
        }`}
        onClick={() => handleMachineSelection(machine)}
      >
        {machine.name}
      </button>
    ));
  }

  return (
    <div className="machineSelectorContainer">
      {loading ? (
        <h1>Loading...</h1>
      ) : error !== null ? (
        <div className="machineSelectionErrorContainer">
          <p className="machineSelectionErrorMSG">{error}</p>
          <button
            className="machineSelectionErrorButton"
            onClick={() => navigate(`/avd/${avd}/line/${line}/dashboard`)}
          >
            Tillbaka till Översikt
          </button>
        </div>
      ) : (
        <div className="machineSelectorContent">
          <div className="machineList">{getMachines()}</div>
        </div>
      )}
    </div>
  );
}
