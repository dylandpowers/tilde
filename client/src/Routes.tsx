import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DashboardPage from "./dashboard/DashboardPage";

const Routes: React.FC = () => {
  // TODO(dpowers): add router framework
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <DashboardPage />
    </Box>
  );
};

export default Routes;