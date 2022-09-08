import { useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import React from "react";
import { GET_INCOMPLETE_TODOS } from "./queries";

interface Todo {
  id: string;
  isCompleted: boolean;
  text: string;
}

interface TodoData {
  todos: [Todo];
}

const TodoCard: React.FC = () => {
  const { data, loading } = useQuery<TodoData>(GET_INCOMPLETE_TODOS);

  const renderLoadingState = (): JSX.Element => {
    return (
      <>
        {[1, 2, 3].map((num) => (
          <ListItem key={num} disablePadding>
            <ListItemButton role={undefined}>
              <ListItemIcon>
                <Checkbox edge="start" checked={false} tabIndex={-1} />
              </ListItemIcon>
              <Skeleton />
            </ListItemButton>
          </ListItem>
        ))}
      </>
    );
  };

  return (
    <Card>
      <CardContent>
        {loading && renderLoadingState()}
        {data &&
          data.todos.map((t) => (
            <ListItem key={t.id} disablePadding>
              <ListItemButton role={undefined}>
                <ListItemIcon>
                  <Checkbox edge="start" checked={false} tabIndex={-1} />
                </ListItemIcon>
                <ListItemText primary={t.text} />
              </ListItemButton>
            </ListItem>
          ))}
      </CardContent>
    </Card>
  );
};

export default TodoCard;
