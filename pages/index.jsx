import Head from "next/head";
import FlagCard from "../components/FlagCard";
import SearchBar from "../components/SearchBar";
import FilterMenu from "../components/FilterMenu";

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
          <section className=" flex flex-col gap-4 pt-6 ">
            {countries.map((country) => (
              <FlagCard {...country} />
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
    "https://restcountries.com/v2/all?fields=name,capital,population,region,flags"
  );
  let countries = await res.json();

  countries.sort((a, b) => b.population - a.population);
  countries = countries.slice(0, 10);
  return {
    props: { countries },
  };
}
