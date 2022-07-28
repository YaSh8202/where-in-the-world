import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function FilterMenu() {
  const [open, setOpen] = useState(false);

  const DropDownMenu = (
    <div className="px-5 shadow-md rounded text-lightDarkBlue dark:text-white py-5 child-hover:text-darkGray absolute flex flex-col gap-1.5 bg-white dark:bg-darkBlue mt-1.5 w-60 child:cursor-pointer ">
      <div>Africa</div>
      <div>America</div>
      <div>Asia</div>
      <div>Europe</div>
      <div>Oceania</div>
    </div>
  );

  return (
    <div className="relative z-10 ">
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className=" rounded shadow-md bg-white text-lightDarkBlue dark:text-white dark:bg-darkBlue flex h-14 px-5  text-sm font-medium w-60 justify-between items-center   "
      >
        <div>Filter By Region</div>
        <ChevronDownIcon className="h-5 w-5" />
      </button>
      {open && DropDownMenu}
    </div>
  );
}

export default FilterMenu;
