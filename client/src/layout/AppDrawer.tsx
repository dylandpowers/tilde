import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import React from "react";

const drawerWidth = "240px";

const AppDrawer: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left" sx={{
      width: drawerWidth,
      flexShrink: 0,
      ["& .MuiDrawer-paper"]: { width: drawerWidth }
    }}>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;