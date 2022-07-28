import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function SearchBar() {
  return (
    <div className=" max-w-xl py-1 mt-6 rounded-md px-6 w-[calc(100%-2.5rem)] mx-auto flex items-center bg-white dark:bg-darkBlue shadow-md ">
      <SearchIcon className="w-5 h-5 text-darkGray  " />
      <input
        className="ml-4 h-12 placeholder:text-darkGray/70 outline-none text-sm flex-1 bg-white dark:bg-darkBlue  text-darkGray  "
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchBar;
