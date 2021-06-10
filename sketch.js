var database;
var bgImg;
var gameState = 0;
var playerCount = 0;
var allPlayers;

var player,form,game;
var plr1,plr2;
var Players;
var fruits;
var fruitGroup;
var fruitImg1,fruitImg2,fruitImg3,fruitImg4,fruitImg5;
var plrImg;

function preload(){
  bgImg = loadImage("images/jungles.jpg");
  plrImg = loadImage("images/basket2.png");
  fruitImg1 = loadImage("images/apple2.png");
  fruitImg2 = loadImage("images/banana2.png");
  fruitImg3 = loadImage("images/melon2.png");
  fruitImg4 = loadImage("images/orange2.png");
  fruitImg5 = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}

function setup(){
  createCanvas(1000,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background(bgImg);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2) {

    game.end();
  }
}