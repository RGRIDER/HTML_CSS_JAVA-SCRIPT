const text = document.querySelector(".text");
const add = document.querySelector(".add");
const counter = document.querySelector(".counter");
const del = document.querySelector(".delete");
const list = document.querySelector(".list");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

const list_item = document.querySelector(".list-item");

document.addEventListener("DOMContentLoaded", function () {
  add.addEventListener("click", adder);
  text.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      adder();
    }
  });
  del.addEventListener("click", deletion);
  update();
});

function deletion() {
  arr = [];
  localStorage.setItem("arr", JSON.stringify(arr));
  update();
  counter.textContent = `0 `;
}

function adder() {
  if (text.value !== "") {
    arr.push(text.value);

    localStorage.setItem("arr", JSON.stringify(arr));
    text.value = "";
    update();
  }
}

function update() {
  list.innerHTML = "";
  arr.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" >
        <p class="list-item-${index}" onclick="edit(${index})">
        ${item}
        </p>
        `;
    list.appendChild(li);
    counter.textContent = `${arr.length}  `;
  });
}

function edit(index) {
  let line = document.querySelector(`.list-item-${index}`);
  let input = document.createElement("input");
  let text = line.textContent.trim();
  input.value = text;
  input.classList.add("temp");
  line.replaceWith(input);
  input.focus();

  input.addEventListener("blur", function () {
    text = input.value.trim();
    if (text !== "") {
      arr[index] = text;
      localStorage.setItem("arr", JSON.stringify(arr));
      update();
    }
  });
}
