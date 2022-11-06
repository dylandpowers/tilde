import React from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage";
import Layout from "./layout/Layout";

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Route>
    </RouterRoutes>
  );
};

export default Routes;
