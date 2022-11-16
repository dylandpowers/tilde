import { List, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SaveButton } from "../components";

const JournalPage: React.FC = () => {
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
      <List></List>
    </Box>
  );
};

export default JournalPage;
