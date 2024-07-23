let scene = 1;
let playButton;

function preload(){

}

function setup() {
  createCanvas(400, 400);
  background(140, 177, 250);

  //play button
  stroke(10);
  playButton = new Sprite(200, 288, 100, 50, "k");
  playButton.color = color("white");
  playButton.text = "PLAY";
  playButton.textSize = 30;
}

function draw() {
  background(56, 191, 240);
  noStroke();

  //grass
  fill(136, 179, 144);
  rect(-7, 355, 410, 50);

  

  //roof with white stripes
  fill(255, 92, 92);
  ellipse(199, 147, 343, 340);

  //building
  fill(230, 198, 198);
  rect(24, 145, 350, 228);
  
  //doors
  fill(117, 116, 117);
  rect(75, 190, 125, 180);
  rect(201, 190, 123, 180);

  //door handles
  fill(255, 255, 255);
  rect(178, 265, 10, 30);
  rect(213, 265, 10, 30);

  //name of the game
  textSize(30);
  text("The Morning Munch", 80, 110);

 
  //button
  if (playButton.mouse.presses()) {
    showScene2();
    scene = 2;
  }
  
}

function showScene2() {
  background("orange");

};