/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city); // parent function
      console.log(`Current city is ${city}`); // checking whether input value passes or not
      setCity(); // clear input field after search
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-5 mt-10">
        <input
          type="text"
          placeholder="Search for a city..."
          className="px-5 py-3 w-[40%] bg-[#212b40] rounded-full outline-none text-white"
          value={city}
          onChange={(e) => setCity(e.target.value)} // passing input for location to API
        />
        <button
          className="bg-slate-100 justify-center px-5 py-3 rounded-full hover:opacity-80 select-none"
          onClick={handleSearch}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export { SearchBar };
