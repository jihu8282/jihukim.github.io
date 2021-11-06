
let button = document.querySelector(".button");
let colors = ["#255c34", "#726756", "#703a56", "#953e00"];
let todos = ["call friends", "talk to your plant", "cook a new recipe", "sign up for zoom yoga"]
let body = document.querySelector("body");
let wrapper = document.querySelector(".wrapper");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;

  let newItem = document.createElement("div");
  newItem.innerHTML = todos[randIndex];
  wrapper.appendChild(newItem);

}

button.addEventListener("click", newColor);
