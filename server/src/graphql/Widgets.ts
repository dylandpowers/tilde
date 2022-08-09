import { extendType, objectType } from "nexus";
import { getCurrentWeather } from "../widgets";

export const Weather = objectType({
  name: "Weather",
  definition(t) {
    t.nonNull.string("degrees");
    t.nonNull.string("iconUrl");
  }
});

export const WeatherQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("weather", {
      type: "Weather",
      resolve() {
        return getCurrentWeather();
      }
    });
  }
});