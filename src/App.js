import "./App.css";

import Forecast from "./Forecast.js";

import axios from "axios";
import { useState } from "react";

function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Sunday 06:00",
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-6 left">
              <form>
                <div className="form-group search-city">
                  <input
                    type="text"
                    className="form-control"
                    id="searchBox"
                    aria-describedby="emailHelp"
                    placeholder="Search a City"
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
            <div className="col-6">
              <h1 id="headingPlace">{weatherData.city}</h1>
              <hr />
              <div className="card today">
                <div class="card-body">
                  <h5 class="card-title">Today</h5>
                  <h6 class="card-subtitle mb-2 text-muted" id="currentDate">
                    <div>{weatherData.date}</div>
                  </h6>
                  <p className="card-text">
                    <span className="tempF" id="tempCF">
                      <span>{Math.round(weatherData.temperature)}</span>
                    </span>
                    <span className="units"> °F</span>
                    <br />
                    <div>
                      Humidity:{" "}
                      <span id="humidity">
                        <span>{weatherData.humidity}</span>
                      </span>{" "}
                      %
                    </div>
                    <div>
                      Wind:{" "}
                      <span id="wind">
                        <span>{weatherData.wind}</span>
                      </span>{" "}
                      mph
                    </div>
                  </p>
                </div>
              </div>
              <section>
                <h5 className="card-title">Other Conditions</h5>
                <div>
                  <p className="card-text text-capitalize" id="description">
                    {weatherData.description}
                  </p>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="Clear"
                    id="icon"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "719c79f57389bdae3a53f02f543b77e6";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

export default App;
