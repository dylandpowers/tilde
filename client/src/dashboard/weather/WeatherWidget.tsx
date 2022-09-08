import { useQuery } from "@apollo/client";
import { Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { GET_CURRENT_WEATHER } from "./queries";

interface Weather {
  degrees: string;
  iconUrl: string;
}

interface WeatherData {
  weather: Weather;
}

const WeatherWidget: React.FC = () => {
  const { data, loading } = useQuery<WeatherData>(GET_CURRENT_WEATHER);

  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-around" }}
      alignItems="center"
    >
      <Typography variant="h4" sx={{ paddingLeft: "10px" }}>
        {loading ? <Skeleton /> : <>{data && data.weather.degrees}&deg;</>}
      </Typography>
      {loading ? (
        <Skeleton variant="circular" />
      ) : (
        <img src={data && data.weather.iconUrl} />
      )}
    </Stack>
  );
};

export default WeatherWidget;
