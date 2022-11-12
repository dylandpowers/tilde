import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SaveButton } from "../components";

const JournalPage: React.FC = () => {
  return (
    <Box sx={{ width: "50%" }}>
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
    </Box>
  );
};

export default JournalPage;
