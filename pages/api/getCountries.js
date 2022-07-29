export default async function handler(req, res) {
  const { query } = req;
  console.log(query.region);
  const { region } = query;
  if (region) {
    const fields = ["name", "capital", "population", "region", "flags", "cioc"];
    const countriesRes = await fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=${fields.join(
        ","
      )}`
    );
    const data = await countriesRes.json();

    const reqData = data.map((country) => {
      // const nativeName = "";
      // for (var lang in person) {
      //   console.log(property, ":", person[property]);
      // }

      return {
        name: country.name.common,
        flags: country.flags,
        // nativeName: country.name.nativeName.eng.official,
        capital: country.capital[0],
        population: country.population,
        region: country.region,
        cioc: country.cioc,
      };
    });
    res.json(reqData);
  }
}
