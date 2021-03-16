import express from "express";
import { getIssPosition } from "../apis/iss.js";
import { getWeatherByCoordinates } from "../apis/weather.js";
export const router = express.Router();

const issVisibilityData = (data) => {
  const {
    name,
    dt,
    sys: { country, sunset, sunrise },
    weather: arr,
    coord: { lon, lat },
  } = data
  const main = arr[0].main;

  return { name, dt, country, sunset, sunrise, main, lon, lat };
}

router.get("/iss-visibility", async (req, res, next) => {
  const issData = await getIssPosition();
  const { longitude, latitude } = issData.data.iss_position;
  const weatherData = await getWeatherByCoordinates({ longitude, latitude });

  res.send(issVisibilityData(weatherData.data));
});
