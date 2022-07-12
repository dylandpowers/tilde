import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import QuoteCard from "./quote/QuoteCard";

const DashboardPage: React.FC = () => {
  return (
    <Box>
      <Stack>
        <QuoteCard />
      </Stack>
    </Box>
  );
};

export default DashboardPage;