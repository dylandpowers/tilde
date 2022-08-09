import axios from "axios";

const DEFAULT_LATITUDE = "40.74675380236168";
const DEFAULT_LONGITUDE = "-74.00194290003854";

export interface CurrentWeather {
  degrees: string;
  iconUrl: string;
}

export function getCurrentWeather(lat: string = DEFAULT_LATITUDE, lon: string = DEFAULT_LONGITUDE):
  Promise<CurrentWeather> {
  return axios.get("https://weatherbit-v1-mashape.p.rapidapi.com/current", {
    params: {
      lon,
      lat,
      units: "I"
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY!,
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"
    }
  })
  .then((res) => {
    const item = res.data.data[0];
    return {
      degrees: item.temp,
      iconUrl: `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`
    };
  });
}
