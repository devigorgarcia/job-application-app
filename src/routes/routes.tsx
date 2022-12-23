import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { HomePage } from "../pages/HomePage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
