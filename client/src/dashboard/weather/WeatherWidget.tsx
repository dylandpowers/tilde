import { useQuery } from "@apollo/client";
import { Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { GET_CURRENT_WEATHER } from "./queries";

const WeatherWidget: React.FC = () => {
  const { data, loading } = useQuery(GET_CURRENT_WEATHER);

  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-around" }}
      alignItems="center"
    >
      <Typography variant="h4" sx={{ paddingLeft: "10px" }}>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            {data.weather.degrees}&deg;
          </>
        )}
      </Typography>
      {loading ? (
        <Skeleton variant="circular" />
      ) : (
        <img src="https://www.weatherbit.io/static/img/icons/c01n.png" />
      )}
    </Stack>
  );
};

export default WeatherWidget;