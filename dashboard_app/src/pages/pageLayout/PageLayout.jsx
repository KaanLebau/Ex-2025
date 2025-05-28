/** @format */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductionLineStatus } from "../../components/productionLineStatus/ProductionLineStatus";
import { SideBar } from "../../components/sideBar/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import "./pageLayout.scss";
import { MachineSelector } from "../../components/machineSelector/MachineSelector";

export function PageLayout() {
  const location = useLocation();
  const isExcludedPage = ["/dashboard", "/daily-control", "/ufo-5s"].some(
    (page) => location.pathname.includes(page)
  );

  const selectedLine = useSelector((state) => state.line.line);

  const [lineLoading, setLineLoading] = useState(true);
  const [lineData, setLineData] = useState(null);

  useEffect(() => {
    if (selectedLine) {
      fetchLine(selectedLine.toLowerCase());
    }
  }, [selectedLine]);

  function fetchLine(line) {
    setLineLoading(true);
    window.appModel
      .getLineByName(line)
      .then((theLine) => {
        setLineData(theLine);
      })
      .catch((error) => {
        console.error("Error fetching line data", error);
      })
      .finally(() => setLineLoading(false));
  }

  return (
    <div className="pageLayoutContainer">
      <div className="pageLayoutHead">
        <ProductionLineStatus loading={lineLoading} data={lineData} />
      </div>
      <div className="pageLayoutLowerBody">
        <SideBar />
        <div className="pageLayoutBody">
          <div
            className={`pageLayputMachineSelector ${
              !isExcludedPage ? "visible" : ""
            }`}
          >
            {!isExcludedPage && <MachineSelector />}
          </div>
          <div className="outletContainer">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
