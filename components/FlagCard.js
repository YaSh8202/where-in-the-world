import Image from "next/image";
import React from "react";

function FlagCard({ flags, name, capital, population, region }) {
  return (
    <div className=" w-64 border-darkGray flex flex-col rounded-lg shadow-md  mx-auto">
      <div className=" h-40 w-64">
        <Image
          layout="intrinsic"
          width={256}
          height={175}
          className="rounded-t-lg"
          src={flags.svg}
        />
      </div>
      <div className="flex flex-col pt-4 pb-8 pl-6  mt-4">
        <h3 className="py-2 font-bold text-lg ">{name}</h3>
        <div>
          <span>Population: </span>
          <span>{population}</span>
        </div>
        <div>
          <span>Region: </span>
          <span>{region}</span>
        </div>
        <div>
          <span>Capital: </span>
          <span>{capital}</span>
        </div>
      </div>
    </div>
  );
}

export default FlagCard;
