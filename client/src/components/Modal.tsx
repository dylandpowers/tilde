import { Box, Modal as MuiModal } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

const Modal: React.FC<Props> = (props) => {
  return (
    <MuiModal open={props.open} onClose={props.onClose}>
      <Box sx={style}>{props.children}</Box>
    </MuiModal>
  );
};

export default Modal;
