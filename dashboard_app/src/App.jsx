/** @format */
/** @format */

import { Routes, Route, Outlet } from "react-router-dom";
import { DashboardPage } from "./pages/dasboardPage/DashboardPage";
import { LinePage } from "./pages/linePage/LinePage";
import { LoginPage } from "./pages/loginPage/LoginPage";

import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";

import "./App.scss";

import { mockData } from "./dummyData/mockData";
import { appModel } from "./model/appModel";
import { AVSPage } from "./pages/aVSPage/AVSPage";
import { MachinePage } from "./pages/machinePage/MachinePage";
import { HandoverPage } from "./pages/handoverPage/HandoverPage";
import { DailyControlPage } from "./pages/dailyControllPage/DailyControlPage";
import { MeasurementPage } from "./pages/measurementPage/MeasurementPage";
import { Ufo5SPage } from "./pages/ufo5sPage/Ufo5SPage";
import { ArtHurPage } from "./pages/arthurPage/ArtHurPage";
import { PageLayout } from "./pages/pageLayout/PageLayout";
import { WeeklyMaintenance } from "./pages/weellyMaintanence/WeeklyMaintenance";
window.appModel = appModel;
function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        {/* Line Selection */}
        <Route
          path="/line/"
          element={<LinePage departmentStructure={mockData} />}
        />

        <Route
          path="/avd/:avdNo/line/:lineName"
          element={
            <PageLayout>
              <Outlet />
            </PageLayout>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="handover" element={<HandoverPage />} />
          <Route path="daily-control" element={<DailyControlPage />} />
          <Route path="measurement" element={<MeasurementPage />} />
          <Route path="arthur" element={<ArtHurPage />} />
          <Route path="avs" element={<AVSPage />} />
          <Route path="ufo-5s" element={<Ufo5SPage />} />
          <Route path="fu" element={<WeeklyMaintenance />} />
          <Route path="machines/" element={<MachinePage />} />
        </Route>
        {/* Catch-All Route */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
