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

  const getBackgroundClass = () => {
    if (!weatherData) return "bg-gray-900"; // Default Dark Gray

    const weatherCondition = weatherData.weather[0].main.toLowerCase();

    const backgrounds = {
      clear: "bg-gray-800", // Sunny
      clouds: "bg-gray-700", // Cloudy
      rain: "bg-gray-600", // Rainy
      drizzle: "bg-gray-700", // Light Rain
      thunderstorm: "bg-gray-800", // Storm
      snow: "bg-gray-500", // Snow
      mist: "bg-gray-700", // Fog
    };

    return backgrounds[weatherCondition] || "bg-gray-900";
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-700 ${getBackgroundClass()}`}>
      <div className="w-full p-10 bg-gray-800 bg-opacity-95 rounded-lg shadow-xl max-w-4xl">
        <SearchBar fetchWeather={fetchWeather} />
        {error && <ErrorMessage />}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
};

export default App;
