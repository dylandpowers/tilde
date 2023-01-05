import { useQuery } from "@apollo/client";
import {
  List,
  Skeleton,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Select,
  InputLabel,
  MenuItem,
  Chip,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo, useState } from "react";
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
  const [categoryFilters] = useState<string[]>([]);

  const filteredEntries = useMemo<Entry[]>(() => {
    if (!data) {
      return [];
    }

    return data.entries.filter((e) =>
      e.categories.some((c) => categoryFilters.includes(c))
    );
  }, [categoryFilters, data?.entries]);

  const uniqueCategories = useMemo<string[]>(() => {
    return [...new Set(data?.entries.flatMap((e) => e.categories))];
  }, [data?.entries]);

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
      <div>
        <FormControl sx={{ width: 225 }}>
          <InputLabel id="category-filter-label">Category Filter</InputLabel>
          <Select
            labelId="category-filter-label"
            id="category-filter-select"
            multiple
            value={categoryFilters}
            onChange={(e) => console.log(e.target.value)}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Category Filter"
              />
            }
          >
            {uniqueCategories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {loading ? (
        <Skeleton />
      ) : (
        <List>
          {filteredEntries.map((e) => (
            <Card key={e.id} sx={{ marginBottom: "12px" }} component="li">
              <CardHeader
                title={new Date(e.date).toDateString()}
                subheader={e.categories.join(", ")}
              />
              <CardContent>{e.text}</CardContent>
            </Card>
          ))}
        </List>
      )}
    </Box>
  );
};

export default JournalPage;
