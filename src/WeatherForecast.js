import React from "react";
import Forecast from "./Forecast";
import Axios from "axios";
export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "719c79f57389bdae3a53f02f543b77e6";
  let lat = 74;
  let lon = 48.7;
  let apiUrl = `
https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  Axios.get(apiUrl).then(handleResponse);
  return (
    <div className="card week" id="forecast">
      <h5 className="card-title week-title">Forecast</h5>
      <ul className="list-group list-group-flush" id="forecastList">
        <Forecast day="mon" icon="icon" temp="80" tempMin="0" />
        <Forecast day="tues" icon="icon" temp="70" tempMin="0" />
        <Forecast day="wed" icon="icon" temp="75" tempMin="0" />
        <Forecast day="thurs" icon="icon" temp="80" tempMin="0" />
        <Forecast day="fri" icon="icon" temp="72" tempMin="0" />
      </ul>
    </div>
  );
}
