# ISS Visibility

## About

This app uses the [ISS API](http://open-notify.org/Open-Notify-API/ISS-Location-Now/) and the [OpenWeather API](https://openweathermap.org/current) to tell you where the International Space Station is and if it is currently visible.

The ISS visibility can be determined based on if it's currently past sunset at that location, in addition to the weather code:

- Past sunset and clear: **yes** , it's visible
- Past sunset and clouds: it's **possibly** visible
- Anything else: **not** visible

## Getting Started

1. Clone this repo and cd into it.
```
git clone https://github.com/dan-marino/iss-visibility
cd iss-visibility
```
2. cd into the server folder `cd server`
   1. run `npm install`
   2. run `node server.js`
3. Open a new tab in your terminal
4. cd back to the root directory `cd ../`
5. cd into the client folder `cd client`
   1. run `npm install`
   2. run `npm start`

The client is running on `localhost:3000` and the server is running on `localhost:5000`

When you visit `localhost:3000`, you should be able to see the City and Country where the ISS is currently flying over, if available.

You'll also see the coordinates, along with a statement describing the visibility.
