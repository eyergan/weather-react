import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <li className="list-group-item weather-forecast-temp">
      <span className="forecast-list">{props.day}</span>
      <span className="forecast-list">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="clear sky"
          id="icon"
        />
      </span>
      <span className="forecast-list"> {props.temp}</span>
      <span className="forecast-list"> {props.tempMin}</span>
    </li>
  );
}
