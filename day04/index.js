// *****************
// Exercise: Level 1
// *****************

// 1)Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

let age = Number(prompt("Enter your age:"));
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are ${18 - age} years older than me`);
}

// 2)Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = Number(prompt("Enter my age:"));
let yourAge = Number(prompt("Enter your age:"));

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} than you`);
} else if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} older than me`);
} else {
  console.log("We are same age");
}

// 3)If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.

let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

a > b ? console.log("a is greater than b") : console.log("a is less than b");

// 4)Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = Number(prompt("enter a number"));

if (number % 2 == 0) {
  console.log(number + " is an even number");
} else {
  console.log(number + " is a odd number");
}

// *****************
// Exercise: Level 2
// *****************

// 1)Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const score = 80;

if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70 && score <= 89) {
  console.log("B");
} else if (score >= 60 && score <= 69) {
  console.log("C");
} else if (score >= 50 && score <= 59) {
  console.log("D");
} else if (score >= 0 && score <= 49) {
  console.log("F");
} else {
  console.log("Invalid score");
}

// 2)Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const month = "April";

switch (month.toLowerCase()) {
  case "september":
  case "october":
  case "november":
    console.log("Season is Autumn");
    break;
  case "december":
  case "January":
  case "February":
    console.log("Season is Winter");
    break;
  case "march":
  case "april":
  case "march":
    console.log("Season is Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Season is Summer");
    break;
  default:
    console.log("invalid month");
}
