import axios from "axios";

const apiKey = "8e81de416e86c8ba7163658d1f0bab54";

export const getWeatherByCoordinates = ({ latitude, longitude }) => {
  const params = `?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  return axios.get(`https://api.openweathermap.org/data/2.5/weather${params}`);
};
