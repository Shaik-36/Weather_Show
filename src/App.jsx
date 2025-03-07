import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const fetchWeather = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setError(false);
      } else {
        setWeatherData(null);
        setError(true);
      }
    } catch (error) {
      setWeatherData(null);
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-xl">
        <SearchBar fetchWeather={fetchWeather} />
        {error && <ErrorMessage />}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
};

export default App;
