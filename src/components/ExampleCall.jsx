import React, { useState, useEffect } from "react";
import axios from "axios";

const ExampleCall = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = "1c9fad3c651bc8b79ce4eaf4eb6c9b43";
    const city = "Girona";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    // Please read https://openweathermap.org/current#name

    axios
      .get(url)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the weather data", error);
      });
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}K</p>
          <p>Weather: {weatherData.weather[0].main}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
