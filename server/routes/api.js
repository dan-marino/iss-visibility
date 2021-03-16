import express from "express";
import { getIssPosition } from "../apis/iss.js";
import { getWeatherByCoordinates } from "../apis/weather.js";
import issVisibilityData from "../helpers/issVisibilityData.js";
export const router = express.Router();

router.get("/iss-visibility", async (req, res, next) => {
  const issData = await getIssPosition();
  const { longitude, latitude } = issData.data.iss_position;
  const weatherData = await getWeatherByCoordinates({ longitude, latitude });

  res.send(issVisibilityData(weatherData.data));
});
