import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function SearchBar() {
  return (
    <div className="max-w-xl py-1 rounded-md px-6 w-full mx-auto md:mx-0 flex items-center bg-white dark:bg-darkBlue shadow-md ">
      <SearchIcon className="w-5 h-5 text-darkGray  " />
      <input
        className="ml-5 h-12 placeholder:text-darkGray/70 outline-none text-sm bg-white dark:bg-darkBlue  text-darkGray  "
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBar;
