var form,game;
var gameState = 0;
var level1;


function setup() {
  createCanvas(displayWidth - 20,displayHeight-30);
  
  game = new Game();
  game.start();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}