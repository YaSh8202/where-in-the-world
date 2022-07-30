const fields = [
  "name",
  "nativeName",
  "tld",
  "capital",
  "population",
  "region",
  "flags",
  "cioc",
  "subRegion",
];

export default async function handler(req, res) {
  const { query } = req;
  const { region, name, cioc } = query;
  let countriesRes;
  if (region) {
    countriesRes = await fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=${fields.join(
        ","
      )}`
    );
  } else if (name) {
    countriesRes = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=${fields.join(",")}`
    );
  } else if (cioc) {
    countriesRes = await fetch(
      `https://restcountries.com/v3.1/alpha/${cioc}?fields=${fields.join(",")}`
    );
  } else {
    return res.status(400);
  }
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
