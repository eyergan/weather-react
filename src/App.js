import "./App.css";
import Weather from "./Weather";
import City from "./City.js";
import Forecast from "./Forecast.js";
import Other from "./Other";

function App() {
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
                href="https://github.com/eyergan/WeatherApp"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>
              <span>, by Evy Yergan</span>
            </p>
          </div>
          <div className="col-6">
            <h1 id="headingPlace">
              <City />
            </h1>
            <hr />
            <div className="card today">
              <Weather />
            </div>
            <section>
              <h5 className="card-title">Other Conditions</h5>
              <Other />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
