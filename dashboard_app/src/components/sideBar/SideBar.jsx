/** @format */

import { useState, useEffect } from "react";
import "./sideBar.scss";
import { useNavigate, useParams, useLocation } from "react-router-dom";
export function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { avdNo, lineName } = useParams();
  const [active, setActive] = useState("");

  const handleSelection = (e) => {
    const key = e.target.dataset.key;
    if (key === "logout") {
      session = window.appModel.getActiveUserSession();
      window.appModel.logout(session.userid);
    } else {
      setActive(key);
      setActive(key);
      navigate(`/avd/${avdNo}/line/${lineName}/${key}`);
    }
  };
  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const currentPage = pathSegments[pathSegments.length - 1]; // Get last segment
    setActive(currentPage || "dashboard"); // Default to "dashboard" if empty
  }, [location.pathname]);

  function pageButton(key, name) {
    return (
      <li className="machineDropdown">
        <button
          data-key={key}
          onClick={handleSelection}
          className={active === key ? "sideBarItem active" : "sideBarItem"}
        >
          {name}
        </button>
      </li>
    );
  }

  return (
    <nav className="sideBarContainer">
      <ul>
        {pageButton("dashboard", "Översikt")}
        {pageButton("machines", "Maskiner")}
        {pageButton("arthur", "ArtHur")}
        {pageButton("measurement", "Mätningar")}
        {pageButton("ufo-5s", "UFO 5s")}
        {pageButton("fu", "Veckostop")}
        {pageButton("avs", "ÅVS")}
        {pageButton("handover", "Överlapp")}
      </ul>
    </nav>
  );
}
