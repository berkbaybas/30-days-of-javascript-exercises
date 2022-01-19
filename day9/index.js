// *****************
// Exercise: Level 1
// *****************

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Explain the difference between forEach, map, filter, and reduce.
// forEach => We can use forEach only with arrays. it provide us to iterate an array elements. it takes an callback function with element, index, and entire array. index and array paramater is optional.

// map => Iterate an array elements and return new array. It takes a callback function with element, index, array.

// filter => Filter out items which full fill filtering conditions. It takes a callback function with element, return new array.

// reduce => Reduce takes a callback function with accumulator, current. second paramater optional start value but good practice we need to define second paramater start value. If we dont start value get array first element value. reduce return accumulator single value.

// Define a call function before you them in forEach, map, filter or reduce.
const call = () => {
  return;
};

// Use forEach to console.log each country in the countries array.
countries.forEach((country) => {
  console.log(country);
});

// Use forEach to console.log each name in the names array.
names.forEach((name) => {
  console.log(name);
});

// Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => {
  console.log(number);
});

// Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map((country) => country.toUpperCase());

// Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => {
  return country.length;
});

// Use map to create a new array by changing each number to square in the numbers array
const squaredNumber = numbers.map((number) => number ** 2);

// Use map to change to each name to uppercase in the names array
names.map((name, index, array) => {
  array[index] = name.toUpperCase();
});

// Use map to map the products array to its corresponding prices.
products.map((product) => {
  return product.price;
});

// Use filter to filter out countries containing land.
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);

// Use filter to filter out countries having six character.
const havingSixCharCountries = countries.filter(
  (country) => country.length <= 6
);

// Use filter to filter out countries containing six letters and more in the country array.
const sixAndMoreCharCountries = countries.filter(
  (country) => country.length >= 6
);

// Use filter to filter out country start with 'E';
const startWithECountries = countries.filter((country) =>
  country.startsWith("E")
);

// Use filter to filter out only prices with values.
const hasPriceProducts = products.filter((product) => product.price > 0);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array) {
  return array.filter((el) => typeof el === "string");
}

// Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const allCountries = countries.reduce((acc, cur) => {
  return acc.concat(`${cur} ,`);
}, "");

// Explain the difference between some and every
// every => check EVERY element with one aspect if suits every element return true
// some => check SOME element with one aspect if suits just one return true

// Use some to check if some names' length greater than seven in names array
names.some((name) => name.length > 7);

// Use every to check if all the countries contain the word land
countries.every((country) => country.includes("land"));

// Explain the difference between find and findIndex.
// find => return first element fits the condition
// findIndex => return first element index fits the condition if not fits you will get -1

// Use find to find the first country containing only six letters in the countries array
countries.find((country) => country.length === 6);

// Use findIndex to find the position of the first country containing only six letters in the countries array
countries.findIndex((country) => country.length === 6);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
countries.findIndex((country) => country === "Norway"); // 3

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
countries.findIndex((country) => country === "Russia"); // -1

// *****************
// Exercise: Level 2
// *****************

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let sum = 0;
products.map((product) => {
  if (typeof product.price === "number") {
    sum += product.price;
  }
});
console.log(sum);

newArray = products.filter((product) => typeof product.price === "number");
newArray.forEach((el) => {
  sum += el.price;
});

sum = products.reduce((acc, cur) => {
  if (typeof cur.price === "number") {
    return acc + cur.price;
  } else {
    return acc + 0;
  }
}, 0);

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
countries.filter((country) => country.name.includes("island"));

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
countries.filter((country, index) => index < 11);

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
// https://stackoverflow.com/questions/68259056/check-how-many-times-a-letter-in-the-alphabet-was-used-as-a-starting-letter-for
const getStartingLetters = (array) => {
  const occurences = array.reduce((acc, { name }) => {
    const startingLetter = name[0];
    acc[startingLetter] = (acc[startingLetter] || 0) + 1;

    return acc;
  }, {});

  console.log(occurences);
};

// *****************
// Exercise: Level 2
// *****************

// sort by name
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

// Use the countries information, in the data folder. Sort countries by name, by capital, by population
countries.sort((a, b) => {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  // equal
  return 0;
});

countries.sort((a, b) => {
  let capitalA = a.capital.toLowerCase();
  let capitalB = b.capital.toLowerCase();

  if (capitalA < capitalB) {
    return -1;
  }

  if (capitalA > capitalB) {
    return 1;
  }

  return 0;
});

countries.sort((a, b) => {
  return a.population - b.population;
});

// *** Find the 10 most spoken languages:
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```

// problem solve algorithm
// reduce
// sort
// filter quantity

// *** Use countries_data.js file create a function which create the ten most populated countries
// console.log(mostPopulatedCountries(countries, 10))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```

// problem solve algorithm
// sort
// filter quantity
// reduce
const mostPopulatedCountries = (countries, quantity) => {
  countries.sort((a, b) => {
    return a.population - b.population;
  });

  filteredCountries = countries.filter((country, index) => index < quantity);

  return filteredCountries.reduce((acc, cur) => {
    acc = [...acc, { country: cur.name, population: cur.population }];
    return acc;
  }, []);
};
