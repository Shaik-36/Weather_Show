import React from "react";
import WeatherDetails from "./WeatherDetails";
import clearImg from "../images/clear.png";
import cloudsImg from "../images/clouds.png";
import drizzleImg from "../images/drizzle.png";
import mistImg from "../images/mist.png";
import rainImg from "../images/rain.png";
import snowImg from "../images/snow.png";

const WeatherCard = ({ data }) => {
  const weatherImages = {
    Clear: clearImg,
    Clouds: cloudsImg,
    Rain: rainImg,
    Drizzle: drizzleImg,
    Mist: mistImg,
    Snow: snowImg,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        className="mx-auto w-24 h-24 mb-4"
        src={weatherImages[data.weather[0].main] || mistImg}
        alt="Weather"
      />
      <h1 className="text-4xl font-bold text-gray-800">{Math.round(data.main.temp)}°C</h1>
      <h2 className="text-xl text-gray-600">{data.name}</h2>
      <h4 className="text-md text-gray-500">Feels Like {Math.floor(data.main.feels_like)}°C</h4>
      <WeatherDetails humidity={data.main.humidity} wind={data.wind.speed} />
    </div>
  );
};

export default WeatherCard;
