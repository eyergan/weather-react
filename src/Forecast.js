import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <li class="list-group-item weather-forecast-temp">
      <span class="forecast-list">{props.day}</span>
      <span class="forecast-list">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="clear sky"
          id="icon"
        />
      </span>
      <span class="forecast-list"> {props.temp}</span>
      <span class="forecast-list"> {props.tempMin}</span>
    </li>
  );
}
