import React, { useState } from "react";
import searchIcon from "../images/search.png";

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        className="w-full p-3 text-lg rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white p-3 rounded-r-lg"
      >
        <img className="w-5 h-5" src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
