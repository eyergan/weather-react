import React from "react";
import "./WeatherForecast.css";

export default function Forecast(props) {
  function maxTemperature() {
    let temperature = (props.data.temp.max * 9) / 5 + 32;
    let roundTemperature = Math.round(temperature);
    return `${roundTemperature}`;
  }

  function minTermperature() {
    let temperature = (props.data.temp.min * 9) / 5 + 32;
    let roundTemperature = Math.round(temperature);
    return `${roundTemperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  let imgUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  return (
    <li className="list-group-item weather-forecast-temp">
      <span className="forecast-list">{day()}</span>
      <span className="forecast-list">
        <img src={imgUrl} alt="alt text" />
      </span>
      <span className="forecast-list">{maxTemperature()}°F</span>

      <span className="forecast-list">{minTermperature()}°F</span>
    </li>
  );
}
