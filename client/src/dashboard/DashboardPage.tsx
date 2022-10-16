import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import QuoteCard from "./quote/QuoteCard";
import ReadingCard from "./reading/ReadingCard";
import TodoCard from "./todo/TodoCard";
import WeatherWidget from "./weather/WeatherWidget";

const DashboardPage: React.FC = () => {
  return (
    <Box>
      <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={10} sx={{ alignSelf: "center" }}>
          <QuoteCard />
        </Grid>
        <Grid item xs={2}>
          <WeatherWidget />
        </Grid>
        <Grid item xs={6}>
          <TodoCard />
        </Grid>
        <Grid item xs={6}>
          <ReadingCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
