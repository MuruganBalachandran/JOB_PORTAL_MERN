import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

function Banner({ query, handleInputChange }) {
  return (
    <div className="max-w-screen-xl container mx-auto py-12">
      <h1 className="text-5xl font-bold text-black mb-3">
        Find your <span className="text-primary">new job</span> today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in the computer, engineering, and technology sectors
        are waiting for you.
      </p>
      <form>
        <div className="flex md:flex-row flex-col md:gap-0 gap-4 items-center">
          <div className="relative flex items-center w-full md:w-1/2 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            <FiSearch className="absolute ml-3 text-gray-400" />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for?"
              className="w-full border-0 bg-transparent py-2 pl-10 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={query}
            />
          </div>
          <div className="relative flex items-center w-full md:w-1/3 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md">
            <FiMapPin className="absolute ml-3 text-gray-400" />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="w-full border-0 bg-transparent py-2 pl-10 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-8 rounded-md"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
