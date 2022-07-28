import React from "react";
import { MoonIcon } from "@heroicons/react/outline";
import { MoonIcon as MoonSolid } from "@heroicons/react/solid";

function Header({ theme, setTheme }) {
  return (
    <nav className=" px-4 flex justify-between sticky w-full bg-white dark:bg-darkBlue text-lightDarkBlue dark:text-white  h-[4.5rem] items-center drop-shadow text-sm ">
      <h3 className=" font-bold ">Where in the world?</h3>
      <button
        onClick={() => {
          setTheme();
        }}
        className="items-center flex gap-1.5"
      >
        {theme === "dark" ? (
          <MoonSolid className="w-[1.13rem]" />
        ) : (
          <MoonIcon className="w-[1.13rem]" />
        )}
        <p className=" text-xs font-semibold">Dark Mode</p>
      </button>
    </nav>
  );
}

export default Header;
