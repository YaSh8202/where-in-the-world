import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Head from "next/head";
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function CountryDetailsPage(props) {
  const { countryData, borderCountries } = props;
  const {
    name,
    nativeName,
    topLevelDomain,
    capital,
    population,
    subregion,
    region,
    currencies,
    languages,
  } = countryData;

  const allLanguages = languages.map((language) => language.name).join(", ");

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="flex min-h-[calc(100vh-72px)] bg-veryLightGray dark:bg-veryDarkBlue items-center justify-center pt-10 ">
        <div className="absolute left-5 top-24  md:left-14 md:top-32 ">
          <Link href="/">
            <a className="text-lightDarkBlue bg-white dark:bg-darkBlue dark:text-white  flex flex-row items-center gap-2 w-32 h-10 justify-center  shadow-[0_0_10px_rgba(0,0,0,0.4)]  ">
              <ArrowLeftIcon className="w-5 h-5" />
              <div>Back</div>
            </a>
          </Link>
        </div>
        <div className="w-full">
          <div className="w-10/12 mx-auto">
            <div className="flex flex-col items-center md:flex-row  md:gap-10 md:items-center md:justify-between ">
              <div className="relative w-4/5 max-w-xl h-52 md:h-[24rem] md:py-40 mt-12  ">
                <Image
                  alt={`${name} flag`}
                  layout="fill"
                  className="w-full"
                  src={countryData.flags.svg}
                />
              </div>
              <div className=" text-lightDarkBlue dark:text-white flex flex-col mt-12 gap-2 md:ml-16 ">
                <h2 className=" text-2xl pb-4  font-bold">{name}</h2>
                <div className="flex flex-col gap-10 md:flex-row  md:flex-wrap md:justify-between ">
                  <div className="flex flex-col gap-1.5">
                    <div>
                      <span className="  font-[450]  ">Native Name: </span>
                      <span className="text-darkBlue font-[325] dark:text-veryLightGray  ">
                        {nativeName}
                      </span>
                    </div>
                    <div>
                      <span className="  font-[450]  ">Population: </span>
                      <span className="text-darkBlue font-[325] dark:text-veryLightGray  ">
                        {numberWithCommas(population)}
                      </span>
                    </div>
                    <div>
                      <span className="  font-[450]  ">Region: </span>
                      <span className="text-darkBlue font-[325] dark:text-veryLightGray  ">
                        {region}
                      </span>
                    </div>
                    <div>
                      <span className="  font-[450]  ">Sub Region: </span>
                      <span className="text-darkBlue font-[325] dark:text-veryLightGray  ">
                        {subregion}
                      </span>
                    </div>
                    <div>
                      <span className="  font-[450]  ">Capital: </span>
                      <span className="text-darkBlue font-[325] dark:text-veryLightGray  ">
                        {capital}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div>
                      <span className="  font-[450]  ">Top Level Domain: </span>
                      <span className="text-darkBlue font-[325] dark:text-veryLightGray  ">
                        {topLevelDomain}
                      </span>
                    </div>
                    <div>
                      <span className="  font-[450]  ">Currencies: </span>
                      <span className="text-darkBlue font-[325] dark:text-veryLightGray  ">
                        {currencies[0].name}
                      </span>
                    </div>

                    <div>
                      <span className="  font-[450]  ">Languages: </span>
                      <span className="text-darkBlue font-[325] dark:text-veryLightGray  ">
                        {allLanguages}
                      </span>
                    </div>
                  </div>
                  {borderCountries.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 ">
                        Border Countries:
                      </h3>
                      <div className="flex flex-row gap-2 flex-wrap ">
                        {borderCountries.map((country, index) => (
                          <div
                            key={index}
                            className=" rounded h-8 px-6 flex flex-col items-center justify-center  dark:bg-darkBlue text-xs md:text-sm text-veryDarkBlue dark:text-veryLightGray shadow "
                          >
                            {country}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetailsPage;

export async function getServerSideProps(context) {
  const code = context.query.code;

  const res = await fetch(`https://restcountries.com/v2/alpha/${code}`);
  const countryData = await res.json();

  let borderCountries = [];
  if (countryData?.borders) {
    const borderRes = await fetch(
      `https://restcountries.com/v2/alpha?codes=${countryData.borders.join(
        ","
      )}`
    );
    const borderData = await borderRes.json();
    borderCountries = borderData.map((country) => country.name);
  }

  return {
    props: {
      countryData: countryData,
      borderCountries: borderCountries,
    },
  };
}
