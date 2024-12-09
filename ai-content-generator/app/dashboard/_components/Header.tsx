import { SearchIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Search Bar Section */}
      <div className="flex items-center space-x-3 bg-white p-3 rounded-full shadow-md w-full max-w-xs hover:scale-110 duration-500">
        <SearchIcon className="text-gray-500 w-6 h-6" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 p-2 bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Membership Offer Section */}
      <div className="mt-6 md:mt-0 flex-shrink-0 text-center md:text-left">
        <h2 className="text-xl font-semibold text-indigo-600">
          🔥 Join Membership just for{" "}
          <span className="text-2xl font-bold text-green-600">$9.99/Month</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
