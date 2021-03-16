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

export default issVisibilityData;
