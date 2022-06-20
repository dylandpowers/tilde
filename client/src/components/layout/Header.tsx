import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h2" component="div">
          ~
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;