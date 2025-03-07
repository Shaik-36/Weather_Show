import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        className="w-full p-4 text-lg rounded-l-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="p-4 bg-gray-700 border border-gray-600 rounded-r-md flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
      >
        <FaSearch className="text-white text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
