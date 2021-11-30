
let slider;
let button;
let bgcolor;
let circleBgcolor;
let input;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  //applies absolute positioning
  canvas.position(0, 0);
  canvas.class("container");
  
  rSlider = createSlider(0, 255, 100);

  //create a button
  /*bgcolor = {r: 0, g: 255, b:255};
  circleBgcolor = {r: 255, g: 0, b:255};
  button = createButton("swap");
  button.class("button");
  button.mousePressed(function() {
    changeColor();
    circleColor();
  });
*/
  // wrapper.child(slider)
  //        .child(button);

  let txt = createDiv('How much lighting do you want in your room?');
  txt.class("copy");
  txt.position(100, 30);


  //create input
  //input = createInput("whats your bday");
  //adds a class to the input
  input.class("input");
}

function changeColor() {
  bgcolor.r = random(0, 255);
  bgcolor.g = random(0, 255);
  bgcolor.b = random(0, 255);
}

function circleColor() {
  circleBgcolor.r = random(0, 255);
  circleBgcolor.g = random(0, 255);
  circleBgcolor.b = random(0, 255);
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
}
