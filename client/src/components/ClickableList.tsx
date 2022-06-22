import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

type Props = {
  labels: string[];
};

const ClickableList: React.FC<Props> = (props) => {
  return (
    <List>
      {props.labels.map(label => (
        <ListItem key={label}>
          <ListItemButton>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ClickableList;