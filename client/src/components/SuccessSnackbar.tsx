import { Alert, Snackbar } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  message: string;
};

const SuccessSnackbar: React.FC<Props> = (props) => {
  const { open, onClose, message } = props;
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
};

export { SuccessSnackbar };
