const countriesAPI = "https://restcountries.com/v3.1/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// *****************
// Exercise: Level 1
// *****************

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

fetch(countriesAPI)
  .then((res) => res.json())
  .then((data) => {
    data.map((el) => {
      console.log(
        `name of country: ${el.name.official} - capital of country ${el.capital}`
      );
    });
  })
  .catch((error) => console.log(error));

// *****************
// Exercise: Level 2
// *****************

// Print out all the cat names in to catNames variable.

(async () => {
  try {
    const response = await fetch(catsAPI);
    const data = await response.json();
    let catNames = [];
    data.map((el) => {
      console.log(el.name);
      catNames.push(el.name);
    });
  } catch (err) {
    console.log(err);
  }
})();

// *****************
// Exercise: Level 3
// *****************

// Read the cats api and find the average weight of cat in metric unit.
// ?

// Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then((res) => res.json())
  .then((data) => {
    data.sort((a, b) => {
      return b.area - a.area;
    });
    largestCountries = data.filter((country, index) => index < 10);

    console.log(largestCountries);
  });

// Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
  .then((res) => res.json())
  .then((data) => {
    let uniqueLang = [];
    const count = data.reduce((acc, cur) => {
      if (!cur.languages) {
        return acc;
      }
      for (const [key, value] of Object.entries(cur.languages)) {
        if (uniqueLang.includes(key)) {
          return acc;
        }
        uniqueLang.push(key);
        return acc + 1;
      }
    }, 0);
    console.log("count", count);
    console.log("langs", uniqueLang);
  });
