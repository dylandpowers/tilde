import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const drawerWidth = "240px";

type DrawerEntry = {
  label: string;
  route: string;
};

const entries: DrawerEntry[] = [
  {
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    label: "Journal",
    route: "/journal",
  },
];

const AppDrawer: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ["& .MuiDrawer-paper"]: { width: drawerWidth },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {entries.map((e) => (
            <ListItem disablePadding key={e.route}>
              <ListItemButton component={Link} to={e.route}>
                {e.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
