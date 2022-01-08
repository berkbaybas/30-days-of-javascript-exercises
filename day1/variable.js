/* 
Day 1: Exercises
*/
//Note: You can define same name variable with let keyword just 1 time in a block. According to this information you need to run this code seperately.

// Write a single line comment which says, comments can make code readable
// Comment

//Write another single comment which says, Welcome to 30DaysOfJavaScript
// Welcome to 30DatsOfJavascript

//Write a multiline comment which says, comments can make code readable, easy to reuse and informative
/*
line1
line2
line3
*/

// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
let name = "berk";
let bool = true;
let surname;
let age = null;

//Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
console.log("string -", typeof name);
console.log("boolean -", typeof bool);
console.log("not declared -", typeof surname);
console.log("null -", typeof age);

// Declare four variables without assigning values

let province;
let district;
let neighborhood;
let street;

// Declare four variables with assigned values

let province = "İstanbul";
let district = "Beşiktaş";
let neighborhood = "Boz";
let street = "Tuna";

//Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Berk";
let lastName = "Baybasş";
let maritalStatus = "engaged";
let country = "Bursa";
let age = 25;

//Declare variables to store your first name, last name, marital status, country and age in a single line

let firstName = "Berk",
  lastName = "Baybasş",
  maritalStatus = "engaged",
  country = "Bursa",
  age = 25;

/* Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
I am 25 years old.
You are 30 years old. */

const myAge = 25;
const yourAge = 30;

console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);
