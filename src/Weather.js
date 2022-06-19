import React from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div class="card-body">
      <h5 class="card-title">Today</h5>
      <h6 class="card-subtitle mb-2 text-muted" id="currentDate">
        <div>Monday, May 30th, 2021</div>
      </h6>
      <p class="card-text">
        <span class="tempF" id="tempCF">
          <span>80</span>
        </span>
        <span class="units">°F</span>
        <br />
        <div>
          Humidity:{" "}
          <span id="humidity">
            <span>50</span>
          </span>{" "}
          %
        </div>
        <div>
          Wind:{" "}
          <span id="wind">
            <span>5</span>
          </span>{" "}
          mph
        </div>
      </p>
    </div>
  );
}
