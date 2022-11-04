import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

type Props = {
  onSave: () => void;
  loading: boolean;
  disabled: boolean;
  height?: string;
};

const SaveButton: React.FC<Props> = (props) => {
  const { onSave, loading, disabled, height } = props;
  return (
    <LoadingButton
      loading={loading}
      loadingPosition="start"
      onClick={onSave}
      disabled={disabled}
      startIcon={<SaveIcon />}
      variant="contained"
      color="success"
      sx={height ? { height } : {}}
    >
      Save
    </LoadingButton>
  );
};

export { SaveButton };
