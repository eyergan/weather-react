import React from "react";
import Forecast from "./Forecast";

export default function WeatherForecast() {
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