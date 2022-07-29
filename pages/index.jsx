import Head from "next/head";
import FlagCard from "../components/FlagCard";
import SearchBar from "../components/SearchBar";
import FilterMenu from "../components/FilterMenu";
import Link from "next/link";

const Home = ({ countries }) => {
  return (
    <div className="">
      <Head>
        <html className="dark"></html>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" min-h-screen bg-veryLightGray dark:bg-veryDarkBlue">
        <div className="w-11/12 mx-auto pt-12 ">
          <div className="flex flex-col md:flex-row gap-10 md:items-center justify-between ">
            <SearchBar />
            <FilterMenu />
          </div>
          <section className=" flex flex-col md:flex-row flex-wrap md:justify-between  gap-8 py-12 ">
            {countries.map((country) => (
              <Link key={country.name} href={`${country.cioc}`}>
                <a className="hover:scale-105 transition-all duration-150 ">
                  <FlagCard {...country} />
                </a>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(
    "https://restcountries.com/v2/all?fields=name,capital,population,region,flags,cioc"
  );
  let countries = await res.json();

  countries.sort((a, b) => b.population - a.population);
  countries = countries.slice(0, 20);
  return {
    props: { countries },
  };
}
