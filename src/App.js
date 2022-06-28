import "./App.css";

import Forecast from "./Forecast.js";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import { useState } from "react";

function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "719c79f57389bdae3a53f02f543b77e6";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-6 left">
              <form onSubmit={handleSubmit}>
                <div className="form-group search-city">
                  <input
                    type="text"
                    className="form-control"
                    id="searchBox"
                    aria-describedby="emailHelp"
                    placeholder="Search a City"
                    onChange={handleCityChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>

              <div className="card week" id="forecast">
                <h5 className="card-title week-title">Forecast</h5>
                <ul className="list-group list-group-flush" id="forecastList">
                  <Forecast day="mon" temp="80" />
                  <Forecast day="tues" temp="70" />
                  <Forecast day="wed" temp="75" />
                  <Forecast day="thurs" temp="80" />
                  <Forecast day="fri" temp="72" />
                  <Forecast day="sat" temp="72" />
                </ul>
              </div>
              <p className="codedBy">
                <a
                  href="https://github.com/eyergan/weather-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open-source code
                </a>
                <span>, by Evy Yergan</span>
              </p>
            </div>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}

export default App;
