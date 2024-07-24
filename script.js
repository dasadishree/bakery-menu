let scene = 1;
let playButton, crossiantButton, donutButton, cupcakeButton, pricesButton;
let crossiantImg, donutImg, cupcakeImg;
let matchaButton, hotCocoaButton, bobaButton, matchaImg, hotCocoaImg, bobaImg;
function preload(){
  donutImg = loadImage('assets/donut.png')
  crossiantImg = loadImage('assets/crossiant.png')
  cupcakeImg = loadImage('assets/cupcake.png')
  matchaImg = loadImage('assets/matcha.png')
  hotCocoaImg = loadImage('assets/hotcocoa.webp')
  bobaImg = loadImage('assets/boba.png')
}

function setup() {
  createCanvas(400, 400);
  background(140, 177, 250);

  //play button
  stroke(10);
  playButton = new Sprite(200, 288, 100, 50, "k");
  playButton.color = color("white");
  playButton.text = "MENU";
  playButton.textSize = 30;

  //play button
  stroke(10);
  pricesButton = new Sprite(-200, -288, 110, 50, "k");
  pricesButton.color = color("white");
  pricesButton.text = "PRICES";
  pricesButton.textSize = 30;

  crossiantButton = new Sprite(crossiantImg, -200,-50,1, 1);
  crossiantImg.resize(125, 125);

  donutButton = new Sprite(donutImg, -200,-50,1, 1);
  donutImg.resize(125, 125);
  
  cupcakeButton = new Sprite(cupcakeImg, -200,-50,1, 1);
  cupcakeImg.resize(175, 125);

  bobaButton = new Sprite(bobaImg, -200,-50,1, 1);
  bobaImg.resize(125, 125);
  
  matchaButton = new Sprite(matchaImg, -200,-50,1, 1);
  matchaImg.resize(175, 125);

  hotCocoaButton = new Sprite(hotCocoaImg, -200,-50,1, 1);
  hotCocoaImg.resize(175, 125);
}

function draw() {
  if(scene ===1) {
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
    text("cozy cafe :3", 80, 110);


    //button
    if (playButton.mouse.presses()) {
      scene = 2;
    }
  }
  if(scene===2) {
      background("pink");
      playButton.pos = {x:-500, y:-500}
      pricesButton.pos = {x:315, y:100}
      fill("hotpink");
      textSize(20);
      text("hi everyone!! welcome to the cozy\n cafe, here's our menu!",50, 50);
      crossiantButton.pos = {x:75, y:180}
      donutButton.pos = {x:210, y:180}
      cupcakeButton.pos = {x:350, y:180}
      bobaButton.pos = {x:350, y:325}
      matchaButton.pos = {x:210, y:325}
      hotCocoaButton.pos = {x:75, y:325}
    
    //button
    if (pricesButton.mouse.presses()) {
      scene = 3;
    }
  }
  if(scene==3) {
    background("hotpink");
    fill("pink");
    textSize(20);
    text("prices!! dw, everything is on the house \n for our favorite customers (you!!!)",50, 50);
    crossiantButton.pos = {x:-575, y:170}
    donutButton.pos = {x:-210, y:170}
    cupcakeButton.pos = {x:-350, y:170}
    bobaButton.pos = {x:-350, y:325}
    matchaButton.pos = {x:-210, y:325}
    hotCocoaButton.pos = {x:-575, y:325}
    pricesButton.pos = {x:-315, y:100}

    fill(255);
    text("CROSSIANT:\n $4", 20, 160);
    text("DONUT:\n $2", 160, 160);
    text("CUPCAKE:\n $5", 290, 160);
    text("BOBA:\n $9", 20, 300);
    text("MATCHA:\n $6", 150, 300);
    text("HOT COCOA:\n $6", 270, 300);


  }
}
