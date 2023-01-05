import { useMutation, useQuery } from "@apollo/client";
import {
  Card,
  CardContent,
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { ADD_TODO, COMPLETE_TODO, GET_INCOMPLETE_TODOS } from "./queries";

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
  const [addTodo] = useMutation<Todo>(ADD_TODO, {
    refetchQueries: [{ query: GET_INCOMPLETE_TODOS }],
  });
  const [completeTodo] = useMutation<Todo>(COMPLETE_TODO, {
    refetchQueries: [{ query: GET_INCOMPLETE_TODOS }],
  });
  const [isAdding, setIsAdding] = useState(false);
  const [newTodoText, setNewTodoText] = useState("");

  const renderLoadingState = (): JSX.Element => {
    return (
      <>
        {[1, 2, 3].map((num) => (
          <ListItem key={num} disablePadding>
            <ListItemButton role={undefined}>
              <ListItemIcon>
                <Checkbox edge="start" checked={false} tabIndex={-1} />
              </ListItemIcon>
              <Skeleton sx={{ flex: 1 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </>
    );
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !!newTodoText.length) {
      addTodo({
        variables: {
          text: newTodoText,
        },
      });
      setNewTodoText("");
      setIsAdding(false);
    }
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
                  <Checkbox
                    edge="start"
                    checked={t.isCompleted}
                    tabIndex={-1}
                    onChange={() =>
                      completeTodo({
                        variables: { id: t.id },
                      })
                    }
                  />
                </ListItemIcon>
                <ListItemText primary={t.text} />
              </ListItemButton>
            </ListItem>
          ))}
        <ListItem key="addTodo" disablePadding>
          <ListItemButton role="button" onClick={() => setIsAdding(true)}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            {isAdding ? (
              <TextField
                id="add-todo"
                label="Enter text here"
                size="small"
                error={!newTodoText.length}
                value={newTodoText}
                onKeyDown={onKeyDown}
                onChange={(e) => setNewTodoText(e.target.value)}
                sx={{ flex: 1 }}
              />
            ) : (
              <ListItemText>Add Todo</ListItemText>
            )}
          </ListItemButton>
        </ListItem>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
