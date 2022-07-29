import React from "react";
import { MoonIcon } from "@heroicons/react/outline";
import { MoonIcon as MoonSolid } from "@heroicons/react/solid";

function Header({ theme, setTheme }) {
  return (
    <nav className="sticky top-0 z-20 w-full bg-white dark:bg-darkBlue text-lightDarkBlue dark:text-white  h-[4.5rem]  drop-shadow text-sm md:text-lg ">
      <div className="flex justify-between items-center h-full w-11/12 mx-auto  ">
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
          <p className=" text-xs md:text-base font-semibold">Dark Mode</p>
        </button>
      </div>
    </nav>
  );
}

export default Header;
