import {
  Card,
  CardContent,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import React, { useMemo, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BOOKS, LOG_READING_ACTIVITY } from "./queries";
import AddBookModal from "./AddBookModal";

const NUMBER_REGEX = new RegExp("\\d+");

interface BookData {
  books: [string];
}

const ReadingCard: React.FC = () => {
  const [logActivity, { data, loading, reset }] =
    useMutation(LOG_READING_ACTIVITY);
  const books = useQuery<BookData>(GET_BOOKS);

  const [readingMinutes, setReadingMinutes] = useState<string>("0");
  const [book, setBook] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const isActivityValid = useMemo<boolean>(
    () =>
      NUMBER_REGEX.test(readingMinutes) &&
      Number(readingMinutes) > 0 &&
      !!book.length,
    [readingMinutes, book]
  );

  const onSave = () => {
    logActivity({
      variables: {
        minutes: Number(readingMinutes),
        book,
      },
    });
  };

  return (
    <Card>
      <CardContent>
        <Box component="form" sx={{ display: "flex" }}>
          <TextField
            id="reading-minutes"
            value={readingMinutes}
            onChange={(e) => setReadingMinutes(e.target.value)}
            helperText="Number of minutes"
            inputProps={{ inputMode: "numeric", pattern: "\\d+" }}
            error={!NUMBER_REGEX.test(readingMinutes)}
            sx={{ flex: 0.5, marginRight: 1 }}
          />
          <FormControl sx={{ flex: 1, marginRight: 1 }}>
            <InputLabel id="book-select-label">Book</InputLabel>
            <Select
              id="reading-book"
              labelId="book-select-label"
              value={book}
              label="Book"
              onChange={(e) => setBook(e.target.value)}
            >
              {books?.data &&
                books.data.books.map((b) => (
                  <MenuItem key={b} value={b}>
                    {b}
                  </MenuItem>
                ))}
            </Select>
            <IconButton
              aria-label="add-book"
              onClick={() => setIsModalOpen(true)}
            >
              <AddIcon />
            </IconButton>
            <AddBookModal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </FormControl>
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            onClick={onSave}
            disabled={!isActivityValid}
            startIcon={<SaveIcon />}
            variant="contained"
            color="success"
            sx={{ height: "56px" }}
          >
            Save
          </LoadingButton>
        </Box>
      </CardContent>
      <Snackbar open={!!data} autoHideDuration={5000} onClose={reset}>
        <Alert severity="success">Successfully saved reading activity!</Alert>
      </Snackbar>
    </Card>
  );
};

export default ReadingCard;
