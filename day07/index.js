// *****************
// Exercise: Level 1
// *****************

// Declare a function fullName and it print out your full name.
function fullName() {
  console.log("Berk Baybaş");
}

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addSum(a, b) {
  return a + b;
}

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle() {
  const length = 4;
  const width = 8;

  console.log(`area : ${length * width}`);
}

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = () => {
  const length = 4;
  const width = 8;

  console.log(`perimeter: ${2 * (length * width)}`);
};

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
(function () {
  const length = 4;
  const width = 8;
  const height = 6;

  console.log(`volume is ${length * width * height}`);
})();

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
(() => {
  const pi = 3.14;
  const r = 4;

  console.log(`area of circle is : ${pi * r ** 2}`);
})();

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle() {
  const pi = 3.14;
  const r = 4;

  console.log("circumference of circle is", 2 * pi - r);
}

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density() {
  const length = 4;
  const width = 8;
  const height = 6;
  const mass = 100;

  let volume = length * width * height;

  console.log("density: ", mass / volume);
}

// *****************
// Exercise: Level 2
// *****************

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

const printArray = (array) => {
  array.map((el) => {
    console.log(el);
  });
};

printArray([1, 2, 3]);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = () => {
  const date = new Date();
  console.log(
    `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getFullYear()} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
  );
};
showDateTime();

// Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x, y) {
  const buffer = x;
  x = y;
  y = buffer;

  console.log("x: ", x, "y: ", y);
}
swapValues(3, 4);

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(array) {
  return (newArray = array.map(
    (val, index, array) => array[array.length - 1 - index]
  ));
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(array) {
  const capitalizedarray = array.map((el) => el.toUpperCase());
  return capitalizedarray;
}
capitalizeArray(["berk"]);

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const addItem = (item) => {
  return [item];
};

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const removeItem = (item) => {
  const numbers = [1, 2, 3];
  console.log();
  numbers.includes(item) ? numbers.splice(numbers.indexOf(item), 1) : "";

  return [numbers];
};

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = (start, end) => {
  if (start > end) {
    console.log("invalid range");
    return;
  }
  sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};
sumOfNumbers(4, 3);

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfOddAndEvenNumbers = (start, end) => {
  if (start > end) {
    console.log("invalid range");
    return;
  }
  sumOdd = 0;
  sumEven = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      sumEven += i;
    } else {
      sumOdd += i;
    }
  }

  return `Evens: ${sumEven} --- Odds: ${sumOdd}`;
};

// Write a function which takes any number of arguments and return the sum of the arguments

//regular func
function sumAllNumbers() {
  let sum = 0;
  for (el of arguments) {
    sum += el;
  }
  return sum;
}

//array func
const sumAllNumbers = (...args) => {
  let sum = 0;
  for (el of args) {
    sum += el;
  }
  return sum;
};

sumAllNumbers(1, 2, 3, 4, 5);

// Write a function which generates a randomUserIp.

function randomUserIp() {
  console.log(
    `${Math.ceil(Math.random() * 255)}.${Math.ceil(
      Math.random() * 255
    )}.${Math.ceil(Math.random() * 255)}.${Math.ceil(Math.random() * 255)}`
  );
}
randomUserIp();
