// *****************
// Exercise: Level 1
// *****************
// Display the countries array as a table
console.table(countries);

// Use console.group() to group logs
console.group();
console.log("even numbers");
console.log("2");
console.log("4");
console.log("6");
console.groupEnd();

console.group();
console.log("odd numbers");
console.log("1");
console.log("3");
console.log("5");
console.groupEnd();

// *****************
// Exercise: Level 2
// *****************
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 5, "10>10 is false");

// Write a warning message using console.warn()
console.warn("using depracted X package, please update with newest");

// Write an error message using console.error()
console.error("bug");

// *****************
// Exercise: Level 3
// *****************
// Check the speed difference among the following loops: while, for, for of, forEach
console.groupCollapsed();
console.group();
console.time("forEach loop");
countries.forEach((country) => {
  console.log(country.name);
});
console.timeEnd("forEach loop");
console.groupEnd();
console.groupCollapsed();
// forEach loop: 3.529345703125 ms

console.group();
console.time("for of loop");
for (const country of countries) {
  console.log(country.name);
}
console.timeEnd("for of loop");
console.groupEnd();
// for of loop: 3.5888671875 ms

console.group();
console.time("for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i].name);
}
console.timeEnd("for loop");
console.groupEnd();
// for loop: 3.239013671875 ms

console.group();
console.time("while loop");
let y = 0;
while (y < countries.length) {
  console.log(countries[y].name);
  y++;
}
console.timeEnd("while loop");
console.groupEnd();
// while loop: 4.137939453125 ms
