// *****************
// Exercise: Level 1
// *****************

// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("firstName", "Berk");
localStorage.setItem("lastName", "Baybaş");
localStorage.setItem("age", "25");
localStorage.setItem("country", "Turkey");
localStorage.setItem("city", "Bursa");

// *****************
// Exercise: Level 2
// *****************

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
let student = {
  firstName: "Berk",
  lastName: "Baybaş",
  age: 25,
  country: "Turkey",
  city: "Bursa",
};
let strStudent = JSON.stringify(student);
localStorage.setItem("student", strStudent);

// *****************
// Exercise: Level 3
// *****************

// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
