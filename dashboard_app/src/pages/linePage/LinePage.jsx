/** @format */

import { useEffect } from "react";
import "./linePage.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDepartments,
  fetchTempos,
  fetchLines,
  setDepartment,
  setTempo,
  setLine,
  resetDepartment,
  resetTempo,
  resetLine,
} from "../../redux/slices/lineSlice";

export function LinePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    department,
    tempo,
    line,
    departments,
    tempos,
    lines,
    loading,
    error,
  } = useSelector((state) => state.line);

  useEffect(() => {
    if (departments.length === 0 && !loading) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, departments.length, loading]);

  function handleDepartmentSelection(dep) {
    dispatch(setDepartment(dep));
    dispatch(fetchTempos());
  }

  function handleTempoSelection(tempo) {
    dispatch(setTempo(tempo));
    dispatch(fetchLines());
  }

  function handleLineSelection(line) {
    dispatch(setLine(line));
    navigate(`/avd/${department}/line/${line.toLowerCase()}/dashboard`);
  }

  function getDepartmentLeaves() {
    if (loading) return <p>Loading departments...</p>;
    if (!departments || departments.length === 0)
      return <p>No departments available</p>;

    return departments.map((dep, index) => (
      <h1
        key={index}
        className="departmentList"
        onClick={() => handleDepartmentSelection(dep)}
      >
        {dep}
      </h1>
    ));
  }

  function getTempoLeaves() {
    if (!department) return null;
    if (loading) return <p>Loading tempos...</p>;
    if (!tempos || tempos.length === 0) return <p>No tempos available</p>;

    return tempos.map((tem, index) => (
      <h1
        key={index}
        className="tempoList"
        onClick={() => handleTempoSelection(tem)}
      >
        {tem}
      </h1>
    ));
  }

  function getLineLeaves() {
    if (!department || !tempo) return null;
    if (loading) return <p>Loading lines...</p>;
    if (!lines || lines.length === 0) return <p>No lines available</p>;

    return lines.map((lin, index) => (
      <h1
        key={index}
        className="lineList"
        onClick={() => handleLineSelection(lin)}
      >
        {lin}
      </h1>
    ));
  }

  return (
    <div className="linePageContainer">
      <h1
        title="DX"
        className="selectedPRU"
        onClick={() => dispatch(resetDepartment())}
      >
        DX
      </h1>

      <div className="departmentLevel">
        {department ? (
          <h1
            className="selectedDepartment"
            onClick={() => dispatch(resetDepartment())}
          >
            {department}
          </h1>
        ) : (
          getDepartmentLeaves()
        )}
      </div>

      <div className="tempoLevel">
        {tempo ? (
          <h1
            title={tempo}
            className="selectedTempo"
            onClick={() => dispatch(resetTempo())}
          >
            {tempo}
          </h1>
        ) : (
          getTempoLeaves()
        )}
      </div>

      <div className="lineLevel">
        {line ? (
          <h1 className="selectedLine" onClick={() => dispatch(resetLine())}>
            {line}
          </h1>
        ) : (
          getLineLeaves()
        )}
      </div>
      {error && <p className="errorIndicator">Fel: {error}</p>}
    </div>
  );
}
