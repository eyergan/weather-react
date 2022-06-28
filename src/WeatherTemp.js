import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function converttoFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function converttoCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span>
          <span className="temperature">{Math.round(props.celsius)}</span>
        </span>
        <span className="units">
          {" "}
          °C |
          <a href="/" onClick={converttoFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span>
          <span className="temperature">{Math.round(fahrenheit)}</span>
        </span>
        <span className="units">
          {" "}
          <a href="/" onClick={converttoCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
