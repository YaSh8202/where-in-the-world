import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function SearchBar() {
  return (
    <div className="max-w-xl py-1 rounded-md px-6 w-full mx-auto md:mx-0 flex items-center bg-white dark:bg-darkBlue  shadow-md ">
      <SearchIcon className="w-5 h-5 text-darkGray dark:text-white  " />
      <input
        className="ml-5 h-12 flex-1 placeholder:text-darkGray/70 placeholder:dark:text-veryLightGray outline-none text-sm bg-white dark:bg-darkBlue dark:text-white  text-darkGray  "
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBar;
