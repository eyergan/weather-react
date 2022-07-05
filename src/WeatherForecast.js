import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import Forecast from "./Forecast";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);

    return (
      <div className="card week" id="forecast">
        <h5 className="card-title week-title">Forecast</h5>
        <ul className="list-group list-group-flush" id="forecastList">
          <Forecast data={forecast[0]} />
        </ul>
      </div>
    );
  } else {
    let apiKey = "719c79f57389bdae3a53f02f543b77e6";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `
https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
