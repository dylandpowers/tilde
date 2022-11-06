import React, { FC } from "react";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { Toolbar } from "@mui/material";

import Header from "./Header";
import AppDrawer from "./AppDrawer";

/**
 * The layout component contains elements that will always be on the screen, regardless of the
 * current route. This includes the app bar and the menu bar.
 *
 * @param props
 * @returns
 */
const Layout: FC = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
      <Header />
      <AppDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
