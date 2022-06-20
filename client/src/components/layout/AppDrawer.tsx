import { Drawer, Toolbar } from "@mui/material";
import React from "react";

const AppDrawer: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Toolbar />
      Drawer goes here
    </Drawer>
  );
};

export default AppDrawer;