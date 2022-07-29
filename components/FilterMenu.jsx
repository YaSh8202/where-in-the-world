import React, { useEffect } from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function FilterMenu({ setCountries }) {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState(null);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch(
        `https://restcountries.com/v2/region/${region}?fields=name,capital,population,region,flags,cioc`
      );
      const countries = await res.json();
      setCountries(countries);
    };
    if (regions.includes(region)) getCountries();
  }, [region]);

  const DropDownMenu = (
    <div className="px-5 shadow-md rounded text-darkBlue dark:text-white py-5 child-hover:text-lightDarkBlue child-hover:font-medium absolute flex flex-col gap-1.5 bg-white dark:bg-darkBlue mt-1.5 w-56 child:cursor-pointer ">
      {regions.map((region) => (
        <div
          onClick={() => {
            setRegion(region);
            setOpen(false);
          }}
        >
          {region}
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 ">
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className=" rounded shadow-md bg-white text-lightDarkBlue dark:text-white dark:bg-darkBlue flex h-14 px-5  text-sm font-medium w-56 justify-between items-center   "
      >
        <div>{`${region ? region : "Filter By Region"}`}</div>
        <ChevronDownIcon className="h-5 w-5" />
      </button>
      {open && DropDownMenu}
    </div>
  );
}

export default FilterMenu;
