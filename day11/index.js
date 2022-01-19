// *****************
// Exercise: Level 1
// *****************

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const constants = [2.72, 3.14, 9.81, 37, 100];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;

// Destructure the rectangle object by its properties or keys.
const { width, height, area, perimeter } = rectangle;

// *****************
// Exercise: Level 2
// *****************

// Iterate through the users array and get all the keys of the object using destructuring
for (const { name, scores, skills, age } of users) {
  console.log(name);
  console.log(scores);
  console.log(skills);
  console.log(age);
}

// Find the persons who have less than two skills
for (const { name, skills } of users) {
  if (skills.length < 2) {
    console.log(name);
  }
}

// *****************
// Exercise: Level 3
// *****************

// Destructure the countries object print name, capital, population and languages of all countries
for (const { name, capital, population, languages } of countries) {
  console.log(
    `${capital} is capital of ${name} country with living ${population} person.`
  );
  console.log(languages);
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];

// David (4) ["HTM", "CSS", "JS", "React"] 90 95

const [name, skills, points] = student;
const [, , jsScore, reactScore] = points;
console.log(name, skills, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = ([first, second, ...others]) => {
  let [name, skills, scores] = first;
  let [name2, skills2, scores2] = second;
  let firstObject = { name, skills, scores };
  let secondObject = { name2, skills2, scores2 };

  return [firstObject, secondObject];
};

//     console.log(convertArrayToObject(students))
//     [
//       {
//         name: 'David',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [98,85,90,95]
//       },
//       {
//         name: 'John',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [85, 80,85,80]
//       }
//     ]

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// Add Bootstrap with level 8 to the front end skill sets +
// Add Express with level 9 to the back end skill sets +
// Add SQL with level 8 to the data base skill sets +
// Add SQL without level to the data science skill sets +
const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

let newStudent = { ...student };

newStudent = {
  ...newStudent,
  skills: {
    ...newStudent.skills,
    frontEnd: [...newStudent.skills.frontEnd, { skill: "Bootstrap", level: 8 }],
  },
};

newStudent = {
  ...newStudent,
  skills: {
    ...newStudent.skills,
    backEnd: [...newStudent.skills.backEnd, { skill: "Express", level: 8 }],
  },
};

newStudent = {
  ...newStudent,
  skills: {
    ...newStudent.skills,
    dataBase: [...newStudent.skills.dataBase, { skill: "SQL", level: 8 }],
  },
};

newStudent = {
  ...newStudent,
  skills: {
    ...newStudent.skills,
    dataScience: [...newStudent.skills.dataScience, "SQL"],
  },
};

// The copied object output should look like this:

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }
