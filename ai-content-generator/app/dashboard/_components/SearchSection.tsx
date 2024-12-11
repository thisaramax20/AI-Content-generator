import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Browse All Templates
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        What would you like to create today?
      </p>
      <div className="flex justify-center">
        <div className="flex items-center w-full max-w-xl bg-gray-100 rounded-full px-4 py-2 shadow-md">
          {/* Search icon component */}
          <div className="text-gray-500 mr-3">
            <Search className="w-5 h-5" />{" "}
            {/* Ensure the icon is appropriately sized */}
          </div>
          {/* Search input */}
          <input
            onChange={(e) => onSearchInput(e.target.value)}
            type="text"
            placeholder="Search templates..."
            className="w-full px-4 py-2 bg-transparent text-gray-800 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
