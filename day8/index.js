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
Object.keys(users);

// Get all the values of users object
Object.values(users);

// *****************
// Exercise: Level 3
// *****************

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "",
  lastName: "",
  incomes: "",
  expanses: "",
  totalIncome: () => incomes + expanses,
  description: function () {
    console.log(`${firstName} ${lastName} account`);
  },
};

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
// Imagine you are getting the above users collection from a MongoDB database.
//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = (newUser) => {
  let isExist = false;
  for (const user of users) {
    if (user.username === newUser.username) {
      isExist = true;
    }
  }
  isExist
    ? console.log(`${newUser.username} already added db`)
    : users.push(newUser);
};
// b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password) {
  isLoggedIn = false;
  for (const user of users) {
    if (user.username === username && user.password === password) {
      console.log("loggedin");
      isLoggedIn = true;
    }
  }
  if (!isLoggedIn) {
    console.log("invalid");
  }
}

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(userId, productId) {
  let likedProduct = products.find((product) => product._id == productId);
  if (!likedProduct.likes.includes(userId)) {
    likedProduct.likes.push(userId);
  } else {
    likedProduct.likes.splice(likedProduct.likes.indexOf(userId), 1);
  }
}
