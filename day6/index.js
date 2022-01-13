// *****************
// Exercise: Level 1
// *****************

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

//   Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i < 11; i++) {
  console.log(i);
}
let i = 0;
while (i < 11) {
  console.log(i);
  i++;
}
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 11);

//   Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i > -1; i--) {
  console.log(i);
}
let i = 10;
while (i > -1) {
  console.log(i);
  i--;
}
let i = 10;
do {
  console.log(i);
  i--;
} while (i > -1);

//   Iterate 0 to n using for loop
let n = Number(prompt("please enter n value"));
for (let i = 0; i < n + 1; i++) {
  console.log(i);
}

//   Write a loop that makes the following pattern using console.log():

//       #
//       ##
//       ###
//       ####
//       #####
//       ######
//       #######
let str = "";
let n = Number(prompt("please enter n value"));
for (let i = 1; i <= n; i++) {
  for (let x = 1; x <= i; x++) {
    str = str + "#";
  }
  console.log(str);
  str = "";
}

//   Use loop to print the following pattern:
//   0 x 0 = 0
//   1 x 1 = 1
//   2 x 2 = 4
//   3 x 3 = 9
//   4 x 4 = 16
//   5 x 5 = 25
//   6 x 6 = 36
//   7 x 7 = 49
//   8 x 8 = 64
//   9 x 9 = 81
//   10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

//   Using loop print the following pattern
//    i    i^2   i^3
//    0    0     0
//    1    1     1
//    2    4     8
//    3    9     27
//    4    16    64
//    5    25    125
//    6    36    216
//    7    49    343
//    8    64    512
//    9    81    729
//    10   100   1000
console.log("i -- i^2 -- i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} -- ${i ** 2} -- ${i ** 3}`);
}

//   Use for loop to iterate from 0 to 100 and print only even numbers
//   Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  i % 2 == 0 ? console.log(`even : ${i}`) : console.log(`odd : ${i}`);
}

//   Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= 100; i++) {
  let flag = true; // Prime

  for (let x = 2; x < i; x++) {
    if (i % x == 0) {
      flag = false;
      break;
    }
  }

  if (i > 1 && flag) {
    console.log("Prime number: ", i);
  }
}

//   Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//   The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("sum: ", sum);

//   Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//   The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}

console.log("Evens: ", sumEven);
console.log("Odds: ", sumOdd);

//   Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//     [2550, 2500]
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
console.log([sumEven, sumOdd]);

//   Develop a small script which generate array of 5 random numbers
for (let i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random() * 11));
}

//   Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqueArray = [];
let i = 0;
while (i < 5) {
  let number = Math.round(Math.random() * 11);
  if (uniqueArray.includes(number)) {
    console.log("its already exist : ", number);
  } else {
    uniqueArray.push(number);
    i++;
  }
}
console.log(uniqueArray);

//   Develop a small script which generate a six characters random id:
//   5j2khz
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i <= 5; i++) {
  console.log(characters[Math.round(Math.random() * characters.length)]);
}

// *****************
// Exercise: Level 2
// *****************

// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
let max = Math.ceil(Math.random() * 11);
let str = "";
for (let i = 0; i < max; i++) {
  str += characters[Math.round(Math.random() * characters.length)];
}
console.log(str);

// Write a script which generates a random hexadecimal number.
// '#ee33df'
let hexRef = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
for (let i = 0; i <= 5; i++) {
  str += hexRef[Math.floor(Math.random() * (hexRef.length + 1))];
}
console.log(`#${str}`);

// Write a script which generates a random rgb color number.
// rgb(240,180,80)
for (let i = 0; i < 2; i++) {
  Math.floor(Math.random() * 256);
}

// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let countries2 = countries.slice();

// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
countriesLenght = [];
for (const country of countries) {
  countriesLenght.push(country.length);
}
console.log(countriesLenght);

// Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
let countriesInfo = [];
for (const country of countries) {
  countriesInfo.push([
    country,
    country.slice(0, 3).toUpperCase(),
    country.length,
  ]);
}
console.log(countriesInfo);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
let countriesWithLand = [];
for (const country of countries) {
  if (country.includes("land")) {
    countriesWithLand = [...countriesWithLand, country];
  }
}
countriesWithLand.length > 0
  ? console.log(countriesWithLand)
  : "All these countries are without land";

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
let countriesWithKeyIA = [];
for (const country of countries) {
  if (country.endsWith("ia")) {
    countriesWithKeyIA.push(country);
  }
}
countriesWithKeyIA.length > 0
  ? console.log(countriesWithKeyIA)
  : "These are countries ends without ia";

// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
let longestCountry = countries[0];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log(longestCountry);

// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
let fiveCharactersCountries = [];
for (const country of countries) {
  if (country.length === 5) {
    fiveCharactersCountries.push(country);
  }
}

// Find the longest word in the webTechs array
webTechs.sort(function (a, b) {
  return b.length - a.length;
});
console.log(webTechs[0]);

// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let webTechsWithLenght = [];
for (const webTech of webTechs) {
  webTechsWithLenght = [...webTechsWithLenght, [webTech, webTech.length]];
}

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
console.log(mernStack[0][0], mernStack[1][0], mernStack[2][0], mernStack[3][0]);

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ["banana", "orange", "mango", "lemon"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

// Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB

for (let i = 0; i < fullStack.length; i++) {
  for (let x = 0; x < fullStack[i].length; x++) {
    console.log(fullStack[i][x]);
  }
}

// *****************
// Exercise: Level 3
// *****************

// Copy countries array(Avoid mutation)
copyCountries = [...countries];

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
sortedCountries = [...countries];
sortedCountries.sort();

// Extract all the countries contain the word 'land' from the countries array and print it as array
includeLandArray = [];
for (const country of countries) {
  if (country.includes("land")) {
    includeLandArray = [...includeLandArray, country];
  }
}
console.log(includeLandArray);

// Extract all the countries containing two or more words from the countries array and print
for (const country of countries) {
  if (country.split(" ").length > 1) {
    console.log(country);
  }
}

// Reverse the countries array and capitalize each country and stored it as an array
for (let i = 0; i < countries.length; i++) {
  countries[i] = countries[i].toUpperCase();
}

console.log(countries);
