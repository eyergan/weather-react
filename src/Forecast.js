import React from "react";

export default function Forecast(props) {
  return (
    <li class="list-group-item weather-forecast-temp">
      {props.day} {props.temp}°
    </li>
  );
}
