const inputNode = document.querySelector(".numberInput");
const btnNode = document.querySelector(".btn");
const danger = document.querySelector(".danger");
const wrapper = document.querySelector(".wrapper");

btnNode.addEventListener("click", () => {
  danger.style.visibility = "hidden";
  wrapper.innerHTML = "";

  let value = Number(inputNode.value);

  if (isNaN(value)) {
    danger.style.visibility = "visible";
    return;
  }

  for (let i = 1; i <= value; i++) {
    let flag = true; // Prime

    for (let x = 2; x < i; x++) {
      if (i % x == 0) {
        flag = false;
        break;
      }
    }

    if (i > 1 && flag) {
      console.log("Prime number: ", i);
      wrapper.innerHTML += `<div class="prime">${i}</div>`;
    } else if (i % 2 == 0) {
      console.log("even: ", i);
      wrapper.innerHTML += `<div class="even">${i}</div>`;
    } else {
      console.log("odd: ", i);
      wrapper.innerHTML += `<div class="odd">${i}</div>`;
    }
  }
});

const codeNode = document.getElementById("code");

window.addEventListener("keydown", (e) => {
  codeNode.innerHTML = e.keyCode;
});
