import React from "react";
import humidityImg from "../images/humidity.png";
import windImg from "../images/wind.png";

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div className="flex items-center space-x-2">
        <img className="w-8 h-8" src={humidityImg} alt="Humidity" />
        <div>
          <p className="text-lg font-semibold">{humidity}%</p>
          <p className="text-sm text-gray-600">Humidity</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <img className="w-8 h-8" src={windImg} alt="Wind Speed" />
        <div>
          <p className="text-lg font-semibold">{wind} km/h</p>
          <p className="text-sm text-gray-600">Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
