import { TextField } from "@mui/material";
import React, { useState } from "react";
import Modal from "../../components/Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

const AddBookModal: React.FC<Props> = (props) => {
  const [bookName, setBookName] = useState<string>("");
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <TextField
        id="add-book"
        label="Enter book title here"
        size="small"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        sx={{ flex: 1 }}
      />
    </Modal>
  );
};

export default AddBookModal;
