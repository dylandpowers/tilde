import { Card, CardContent, Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const TODOS = [
  "Place",
  "Hold",
  "ERRR"
];

const TodoCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        {TODOS.map((t) => (
          <ListItem key={t} disablePadding>
            <ListItemButton role={undefined}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={false}
                  tabIndex={-1}
                />
              </ListItemIcon>
              <ListItemText primary={t} />
            </ListItemButton>
          </ListItem>
        ))}
      </CardContent>
    </Card>
  );
};

export default TodoCard;