import { useQuery } from "@apollo/client";
import {
  List,
  ListItem,
  ListItemText,
  Skeleton,
  TextField,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SaveButton } from "../components";
import { GET_JOURNAL_ENTRIES } from "./queries";

interface Entry {
  id: string;
  text: string;
  categories: [string];
  date: string;
}

interface EntryData {
  entries: [Entry];
}

const JournalPage: React.FC = () => {
  const { data, loading } = useQuery<EntryData>(GET_JOURNAL_ENTRIES);

  return (
    <Box>
      <TextField
        placeholder="Write down some thoughts..."
        multiline
        fullWidth
      />
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", paddingTop: "12px" }}
      >
        <SaveButton
          onSave={() => console.log("Saved")}
          loading={false}
          disabled={false}
        />
      </Box>
      {loading ? (
        <Skeleton />
      ) : (
        <List>
          {data?.entries.map((e) => (
            <Card key={e.id} sx={{ marginBottom: "12px" }}>
              <CardHeader action={new Date(e.date).toDateString()} />
              <CardContent>
                <ListItem>
                  <ListItemText
                    primary={e.text}
                    secondary={e.categories.join(", ")}
                  />
                </ListItem>
              </CardContent>
            </Card>
          ))}
        </List>
      )}
    </Box>
  );
};

export default JournalPage;
