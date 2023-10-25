let x = 175;
let y = 175;
let width = 50;
let heigth = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  fill("red");
  rect(x, y, width, heigth);
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    x -= 10;
  }

  if (keyCode == RIGHT_ARROW) {
    x += 10;
  }

  if (keyCode == UP_ARROW) {
    y -= 10;
  }

  if (keyCode == DOWN_ARROW) {
    y += 10;
  }
}
