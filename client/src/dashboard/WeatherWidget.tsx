import { Stack } from "@mui/material";
import React from "react";

const WeatherWidget: React.FC = () => {
  return (
    <Stack direction="row">
      <img src="https://www.weatherbit.io/static/img/icons/c01n.png" />
      85
    </Stack>
  );
};

export default WeatherWidget;