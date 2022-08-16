import { Stack, Typography } from "@mui/material";
import React from "react";

const WeatherWidget: React.FC = () => {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-around"}}
      alignItems="center"
    >
      <Typography variant="h4" sx={{ paddingLeft: "10px" }}>
        85 &deg;
      </Typography>
      <img src="https://www.weatherbit.io/static/img/icons/c01n.png" />
    </Stack>
  );
};

export default WeatherWidget;