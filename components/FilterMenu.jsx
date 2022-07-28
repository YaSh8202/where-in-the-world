import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function FilterMenu() {
  const [open, setOpen] = useState(false);

  const DropDownMenu = (
    <div className="px-5 absolute bg-white mt-2 w-60 ">
      <div>Africa</div>
      <div>America</div>
      <div>Asia</div>
      <div>Europe</div>
      <div>Oceania</div>
    </div>
  );

  return (
    <div className="relative ml-5 ">
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className=" bg-white shadow-sm flex h-14 px-5  text-sm  font-semibold w-60 justify-between items-center   "
      >
        <div>Filter By Region</div>
        <ChevronDownIcon className="h-5 w-5" />
      </button>
      {open && DropDownMenu}
    </div>
  );
}

export default FilterMenu;
