// *****************
// Exercise: Level 1
// *****************

// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const pNode = document.querySelector("p");
console.log(pNode);

// Get get each of the the paragraph using document.querySelector('#id') and by their id
const firstNode = document.querySelector("#name");
const secondNode = document.querySelector("#surname");
const thirdNode = document.querySelector("#job");
const fourthNode = document.querySelector("#country");
console.log(firstNode, secondNode, thirdNode, fourthNode);

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const pNodeList = document.querySelectorAll("p");
pNodeList.forEach((el) => {
  console.log(el.nodeName);
});

// Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i < pNodeList.length; i++) {
  console.log(pNodeList[i].innerHTML);
}

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
for (let i = 0; i < pNodeList.length; i++) {
  if (i === 3) {
    pNodeList[i].textContent = "Fourth Paragraph";
  }
}
console.log(pNodeList[3].textContent);

// Set id and class attribute for all the paragraphs using different attribute setting methods

firstNode.setAttribute("class", "username");
firstNode.setAttribute("id", "username");

// *****************
// Exercise: Level 2
// *****************

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

for (let i = 0; i < pNodeList.length; i++) {
  if (i === 0) {
    pNodeList[i].style.fontSize = "24px";
  }
  if (i === 1) {
    pNodeList[i].style.color = "red";
  }
  if (i === 2) {
    pNodeList[i].style.fontWeight = "bold";
  }
  if (i == 3) {
    pNodeList[i].style.textTransform = "uppercase";
  }
}

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

for (let i = 0; i < pNodeList.length; i++) {
  if (i === 0 || i === 2) {
    pNodeList[i].style.color = "green";
  }
  if (i === 1 || i === 3) {
    pNodeList[i].style.color = "red";
  }
}

// Set text content, id and class to each paragraph

thirdNode.innerHTML = "Updated!";
