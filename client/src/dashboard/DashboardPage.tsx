import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import QuoteCard from "./quote/QuoteCard";
import WeatherWidget from "./weather/WeatherWidget";

const DashboardPage: React.FC = () => {
  return (
    <Box>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={10}>
          <QuoteCard />
        </Grid>
        <Grid item xs={2}>
          <WeatherWidget />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;