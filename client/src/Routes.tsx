import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage";
import Layout from "./layout/Layout";

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </RouterRoutes>
  );
};

export default Routes;
