import React from "react";

export default function WeatherTemp(props) {
  let fahrenheit = (props.celsius * 9) / 5 + 32;
  return (
    <div className="WeatherTemp">
      <span>
        <span className="temperature">{Math.round(fahrenheit)}</span>
      </span>
      <span className="units"> °F</span>
    </div>
  );
}
