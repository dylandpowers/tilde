import { useMutation } from "@apollo/client";
import { Alert, Box, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import { Modal, SaveButton } from "../../components";
import { ADD_BOOK } from "./queries";

type Props = {
  open: boolean;
  onClose: () => void;
};

const AddBookModal: React.FC<Props> = (props) => {
  const [bookName, setBookName] = useState<string>("");
  const [addBook, { data, loading, reset }] = useMutation(ADD_BOOK);

  const onSave = () => {
    addBook({
      variables: {
        book: bookName,
      },
    }).then(() => props.onClose());
  };

  return (
    <>
      <Modal open={props.open} onClose={props.onClose}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <TextField
            id="add-book"
            label="Enter book title here"
            size="small"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            sx={{ flex: 1, marginRight: 1 }}
          />
          <SaveButton disabled={!bookName} onSave={onSave} loading={loading} />
        </Box>
      </Modal>
      <Snackbar open={!!data} autoHideDuration={5000} onClose={reset}>
        <Alert severity="success">Successfully saved book!</Alert>
      </Snackbar>
    </>
  );
};

export default AddBookModal;
