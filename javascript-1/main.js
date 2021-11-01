console.log("Hello");

let navElement = document.querySelector(".nav");
navElement.classList.add("special");

console.log("my nav element:", navElement);

let body = document.body;

function turnOnLight() {
	body.classList.toggle("light");
	button.classList.toggle("butonOn");
}


let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);