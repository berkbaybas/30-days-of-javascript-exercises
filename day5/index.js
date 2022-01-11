// *****************
// Exercise: Level 1
// *****************

// 1)Declare an empty array;
const array = [];
const array2 = Array();
const array3 = new Array();
console.log(array, array2, array3);

// 2)Declare an array with more than 5 number of elements
const array = [1, 2, 3, 4, 5, 6];
console.log(array);

// 3)Find the length of your array
console.log(array.length);

// 4)Get the first item, the middle item and the last item of the array
console.log(
  `first: ${array[0]}, middle: ${array[array.length / 2]}, last: ${
    array[array.length - 1]
  }`
);

// 5)Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  1,
  "hi",
  { name: "berk", age: 25 },
  [1, 2, 3, 4, 5],
  false,
  null,
  undefined,
];
console.log(mixedDataTypes);

// 6)Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "facebook",
  "google",
  "microsoft",
  "apple",
  "IBM",
  "oracle",
  "amazon",
];

// 7)Print the array using console.log()
console.log(itCompanies);

// 8)Print the number of companies in the array
console.log(itCompanies.length);

// 9)Print the first company, middle and last company
console.log(
  `first: ${[0]} - middle: ${
    itCompanies[Math.floor(itCompanies.length / 2)]
  } - last: ${itCompanies[itCompanies.length - 1]}`
);

// 10)Print out each company
console.log(itCompanies.toString());

// 11)Change each company name to uppercase one by one and print them out
let newItCompanies = itCompanies.map((company) => {
  companyEnd = company.substring(1);
  companyStart = company.slice(0, 1).toUpperCase();
  return companyStart.concat(companyEnd);
});

console.log(newItCompanies.join());

// 12)Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", "));

// 13)Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const index = itCompanies.indexOf("apple");
index != -1 ? "Apple" : "Not Found";

// 14)Filter out companies which have more than one 'o' without the filter method

// 15)Sort the array using sort() method
console.log(itCompanies.sort());

// 16)Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17)Slice out the first 3 companies from the array
itCompanies.splice(3);

// 18)Slice out the last 3 companies from the array
itCompanies.slice(0, itCompanies.length - 3);

// 19)Slice out the middle IT company or companies from the array
itCompanies.slice(itCompanies.length / 2, 1);

// 20)Remove the first IT company from the array
itCompanies.shift();

// 21)Remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.length / 2, 1);

// 22)Remove the last IT company from the array
itCompanies.pop();

// 23)Remove all IT companies
itCompanies.splice();

// *****************
// Exercise: Level 2
// *****************

// 1)Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in index.js file

console.log(countries);

// 2)First remove all the punctuations and change the string to array and count the number of words in the array
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
webTechs.map((tech) => {
  console.log(tech.replace(regex, "").length);
});

// 3) In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (shoppingCart[0] != "Meat") {
  shoppingCart.unshift("Meat");
}
console.log("1", shoppingCart);

if (shoppingCart[shoppingCart.length - 1] != "Sugar") {
  shoppingCart.push("Sugar");
}
console.log("2", shoppingCart);

const isAlergic = true;
if (isAlergic) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log("3", shoppingCart);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log("4", shoppingCart);

countries.includes("Ethiopia")
  ? console.log("ETHIOPIA")
  : countries.push("Ethiopia");

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes("Sass")
  ? console.log("Sass is a CSS preprocess")
  : webTechs.push("Sass");

// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];

// const fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);

// *****************
// Exercise: Level 3
// *****************
// 1)The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
ages.sort();
console.log(`min: ${ages[0]} - max: ${ages[ages.length - 1]}`);

// Find the average age(all items divided by number of items)
console.log((ages[ages.length - 1] + ages[0]) / 2);
