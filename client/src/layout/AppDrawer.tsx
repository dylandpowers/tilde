import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
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
              <ListItemButton
                component={Link}
                to={e.route}
                sx={{ height: "60px" }}
                selected={location.pathname === e.route}
              >
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
