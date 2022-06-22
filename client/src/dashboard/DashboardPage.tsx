import { Box } from "@mui/system";
import React from "react";
import QuoteCard from "./QuoteCard";

const DashboardPage: React.FC = () => {
  return (
    <Box component="main">
      <QuoteCard />
    </Box>
  );
};

export default DashboardPage;