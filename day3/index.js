// *****************
// Exercise: Level 1
// *****************

// 1)Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "berk";
const lastName = "baybaş";
const country = "Turkey";
const city = "Bursa";
const age = 25;
const isMarried = false;
const year = new Date().getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2)Check if type of '10' is equal to 10

console.log(typeof "10" == typeof 10);

// 3)Check if parseInt('9.8') is equal to 10

console.log(parseInt("9.8") == 10);

// 4)Boolean value is either true or false.
/* Write three JavaScript statement which provide truthy value.
   Write three JavaScript statement which provide falsy value. */

console.log(typeof 1 === typeof 3);
console.log(5 > 3);
console.log(4 == "4");
console.log(5 === "5");
console.log(3 > 5);
console.log(3 === NaN);

// 5)Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 -> true
// 4 >= 3 -> true
// 4 < 3 -> false
// 4 <= 3 -> false
// 4 == 4 -> true
// 4 === 4 -> true
// 4 != 4 -> false
// 4 !== 4 -> false
// 4 != '4' -> false
// 4 == '4' -> true
// 4 === '4' -> false
// Find the length of python and jargon and make a falsy comparison statement. -> "python".length != "jargon".length -> false

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("python".length != "jargon".length);

//6)Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 ->  true
// 4 > 3 && 10 > 12 -> false
// 4 > 3 || 10 < 12 -> true
// 4 > 3 || 10 > 12 -> true
// !(4 > 3) -> false
// !(4 < 3) -> true
// !(false) -> true
// !(4 > 3 && 10 < 12) -> false
// !(4 > 3 && 10 > 12) -> true
// !(4 === '4') -> true
//  There is no 'on' in both dragon and python "dragon".includes("on") == python.includes("on") -> true

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log("dragon".includes("on") == "python".includes("on"));

// 7)Use the Date object to do the following activities

// What is the year today?
let now = new Date();
console.log(now.getFullYear());

// What is the month today as a number?
console.log(now.getMonth() + 1);

// What is the date today?
console.log(
  now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()
);

// What is the day today as a number?
console.log(now.getDay() + 1);

// What is the hours now?
console.log(now.getHours());

// What is the minutes now?
console.log(now.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now());

// *****************
// Exercise: Level 2
// *****************

// 1)Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt("enter base value");
let height = prompt("height base value");

console.log("area: " + 0.5 * base * height);

// 2)Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = prompt("Side A value");
let sideB = prompt("Side B value");
let sideC = prompt("Side C value");

console.log("perimeter: ", Number(sideA) + Number(sideB) + Number(sideC));

// 3)Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt("length value");
let width = prompt("width value");

// You should change value to Number because "+" work with string concatenation
console.log(
  `area: ${length * width} - perimeter: ${2 * (Number(length) + Number(width))}`
);

// 4)Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const pi = 3.14;
let radius = prompt("radius value");

console.log(`area: ${pi * radius ** 2} - circumference: ${2 * pi * radius}`);

// 15)Create a human readable time format using the Date time object

let date = new Date();

// YYYY-MM-DD HH:mm
console.log(
  date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, 0) +
    "-" +
    String(date.getDay() + 1).padStart(2, 0) +
    " " +
    String(date.getHours()).padStart(2, 0) +
    ":" +
    String(date.getMinutes()).padStart(2, 0)
);

// *****************
// Exercise: Level 3
// *****************

// 1)Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

//YYY-MM-DD HH:mm eg. 20120-01-02 07:05 -> YYY ?

console.log(
  date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, 0) +
    "-" +
    String(date.getDay() + 1).padStart(2, 0) +
    " " +
    String(date.getHours()).padStart(2, 0) +
    ":" +
    String(date.getMinutes()).padStart(2, 0)
);
