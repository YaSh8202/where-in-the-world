import Image from "next/image";
import React from "react";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function FlagCard({ flags, name, capital, population, region }) {
  return (
    <div className=" bg-white dark:bg-darkBlue w-64 border-darkGray flex flex-col justify-between rounded-lg shadow-md  mx-auto md:mx-0 ">
      <div className=" h-40 w-64  ">
        <Image
          layout="intrinsic"
          width={256}
          height={175}
          className="rounded-t-lg object-cover "
          src={flags.svg}
        />
      </div>
      <div className="flex flex-col pt-4 pb-10 pl-6  mt-4 text-lightDarkBlue dark:text-white ">
        <h3 className="py-3 font-bold text-lg ">{name}</h3>
        <div>
          <span className=" font-normal ">Population: </span>
          <span className="text-darkBlue dark:text-veryLightGray font-light ">
            {numberWithCommas(population)}
          </span>
        </div>
        <div className="my-1 ">
          <span className="font-normal">Region: </span>
          <span className="text-darkBlue dark:text-veryLightGray font-light ">
            {region}
          </span>
        </div>
        <div>
          <span className="font-normal">Capital: </span>
          <span className="text-darkBlue dark:text-veryLightGray font-light ">
            {capital}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FlagCard;
