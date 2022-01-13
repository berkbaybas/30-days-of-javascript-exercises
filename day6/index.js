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
var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i <= 5; i++) {
  console.log(characters[Math.round(Math.random() * characters.length)]);
}
