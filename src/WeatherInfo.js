import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo col-6">
      <h1 id="headingPlace">{props.data.city}</h1>
      <hr />
      <div className="card today">
        <div class="card-body">
          <h5 class="card-title">Today</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="currentDate">
            <div>
              <FormattedDate date={props.data.date} />
            </div>
          </h6>
          <p className="card-text">
            <span className="tempF" id="tempCF">
              <span>{Math.round(props.data.temperature)}</span>
            </span>
            <span className="units"> °F</span>
            <br />
            <div>
              Humidity:{" "}
              <span id="humidity">
                <span>{props.data.humidity}</span>
              </span>{" "}
              %
            </div>
            <div>
              Wind:{" "}
              <span id="wind">
                <span>{props.data.wind}</span>
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
            {props.data.description}
          </p>
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            id="icon"
          />
        </div>
      </section>
    </div>
  );
}
