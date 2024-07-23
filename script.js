
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke()
  fill(0);
  ellipse(mouseX, mouseY, 25, 25);
}