var bow , arrow,  background;
var bowImage, arrowImage, greenballoonImage, redballoonImage, pinkballoonImage ,blueballoonImage, backgroundImage;
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  redballoonImage = loadImage("red_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
 
  bow = createSprite(380,175,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
  background(0);
  
   scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  bow.y = World.mouseY
  
  if (keyDown("space")) {
    createArrow();
   }
  
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
  } if (select_balloon == 2) {
      pinkBalloon();
  } if (select_balloon == 3) {
        greenBalloon();
  } if (select_balloon == 4) {
        blueBalloon();
  }  
  }
     drawSprites();
  text("SCORE :"+ score,27,30)
  textSize(30);
}

 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redballoonImage);
  red.velocityX = 4;
  red.lifetime = 150;
  red.scale = 0.1;

}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(60, 430)), 20, 20);
  pink.addImage(pinkballoonImage);
  pink.velocityX = 3.5;
  pink.lifetime = 150;
  pink.scale = 1.3;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(60, 430)), 20, 20);
  green.addImage(greenballoonImage);
  green.velocityX = 3.5;
  green.lifetime = 150;
  green.scale = 0.1;
}


function blueBalloon() {
  var blue =  createSprite(0,Math.round(random(60, 430)), 20, 20);
  blue.addImage(blueballoonImage);
  blue.velocityX = 3.5;
  blue.lifetime = 150;
  blue.scale = 0.1
}
