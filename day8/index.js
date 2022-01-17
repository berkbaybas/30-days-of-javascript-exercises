// *****************
// Exercise: Level 1
// *****************

// Create an empty object called dog
const dog = {};

// Print the the dog object on the console
console.log(dog); // ? not empty

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "fındık";
dog.color = "brown";
dog.age = 3;
dog.bark = () => {
  return "woof woof";
};

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// *****************
// Exercise: Level 2
// *****************

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.

let buffer = users.Alex.skills.length;
let mostTalented = "Alex";
for (const el of Object.entries(users)) {
  if (el[1].skills.length > buffer) {
    buffer = el[1].skills.length;
    mostTalented = el[0];
  }
}
console.log(mostTalented); // ASAB is most talented.

// Count logged in users, count users having greater than equal to 50 points from the following object.
loggedUsers = 0;
pointsGreaterfiftyCount = 0;

for (const el in users) {
  if (users[el].isLoggedIn) {
    loggedUsers++;
  }
  if (users[el].points >= 50) {
    points++;
  }
}

// Find people who are MERN stack developer from the users object
const MERN = ["MongoDB", "Express", "React", "Node"];
for (let el of Object.entries(users)) {
  let isMERNDev = true;

  for (const lang of MERN) {
    if (!el[1].skills.includes(lang)) {
      isMERNDev = false;
      break;
    }
  }

  isMERNDev
    ? console.log(`${el[0]} is a MERN developer`)
    : console.log(`${el[0]} is not a MERN developer`);
}

// Set your name in the users object without modifying the original users object
const copyUsers = Object.assign(
  {
    berk: {
      email: "berk@berk.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 25,
      isLoggedIn: true,
    },
  },
  users
);

// Get all keys or properties of users object
Object.entries(users);

// Get all the values of users object
Object.values(users);
