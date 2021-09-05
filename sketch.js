var sea
var ship
var seaImg
var shipImg

function preload(){
 seaImg = loadImage("sea.png");
 shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(500,500);
  sea = createSprite (250,250,250,250);
  sea.addImage(seaImg);
  sea.scale = 0.2;
  sea.velocityX = -2;

  ship = createSprite (250,250,100,100);
  ship.addAnimation("running",shipImg)
  ship.scale = 0.2
}

function draw() {
 
if(sea.x < 0){
 sea.x = width/2 ;
}
 
 drawSprites();

}