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

  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left: Weather Icon and Temperature */}
        <div className="text-center md:text-left">
          <img
            className="w-40 h-40 mx-auto md:mx-0"
            src={weatherImages[data.weather[0].main] || mistImg}
            alt="Weather"
          />
          <h1 className="text-6xl font-bold text-gray-800">
            {Math.round(data.main.temp)}°C
          </h1>
          <h2 className="text-2xl text-gray-600">{data.name}, {data.sys.country}</h2>
          <p className="text-lg text-gray-500 capitalize">
            {data.weather[0].description}
          </p>
        </div>

        {/* Right: Additional Details */}
        <div className="grid grid-cols-2 gap-6 text-center md:text-left">
          <div>
            <p className="text-lg font-semibold">{Math.floor(data.main.feels_like)}°C</p>
            <p className="text-sm text-gray-600">Feels Like</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{data.main.pressure} hPa</p>
            <p className="text-sm text-gray-600">Pressure</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{data.visibility / 1000} km</p>
            <p className="text-sm text-gray-600">Visibility</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{data.coord.lat}, {data.coord.lon}</p>
            <p className="text-sm text-gray-600">Coordinates</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{sunrise}</p>
            <p className="text-sm text-gray-600">Sunrise</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{sunset}</p>
            <p className="text-sm text-gray-600">Sunset</p>
          </div>
        </div>
      </div>

      {/* Humidity and Wind Section */}
      <WeatherDetails humidity={data.main.humidity} wind={data.wind.speed} />
    </div>
  );
};

export default WeatherCard;
