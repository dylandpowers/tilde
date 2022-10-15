import { Card, CardContent, TextField } from "@mui/material";
import { Box } from "@mui/system";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";

const NUMBER_REGEX = new RegExp("\\d+");

const ReadingCard: React.FC = () => {
  const [readingMinutes, setReadingMinutes] = useState<string>("0");
  const [book, setBook] = useState<string>("");

  return (
    <Card>
      <CardContent>
        <Box component="form" sx={{ display: "flex" }}>
          <TextField
            id="reading-minutes"
            value={readingMinutes}
            onChange={(e) => setReadingMinutes(e.target.value)}
            label="Number of minutes"
            helperText="Number of minutes"
            inputProps={{ inputMode: "numeric", pattern: "\\d+" }}
            error={!NUMBER_REGEX.test(readingMinutes)}
            sx={{ flex: 0.5, marginRight: 1 }}
          />
          <TextField
            id="reading-book"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            label="Book"
            helperText="Book"
            sx={{ flex: 1, marginRight: 1 }}
          />
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            color="success"
            sx={{ height: "56px" }}
          >
            Save
          </LoadingButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReadingCard;
