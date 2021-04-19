var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var rockets, rocket1, rocket2, rocket3, rocket4;
var rocket1_img, rocket2_img, rocket3_img, rocket4_img;

function preload(){
  rocket1_img = loadImage("../images/rocket.png");
  rocket2_img = loadImage("../images/rocket.png");
  rocket3_img = loadImage("../images/rocket.png");
  rocket4_img = loadImage("../images/rocket.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}