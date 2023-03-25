let ground;
let rocketPlayer,space;
var rocketPlayer_img;
var bg_img;
var asteroid1_img
var asteroid2_img
var asteroid3_img
var missile_img,missile
var obstaclesGroup
var lives

function preload()
{
  rocketPlayer_img = loadImage("rocketPlayer.png");
  bg_img = loadImage("space.jpg");
  asteroid1_img = loadImage("asteroid1.png")
  asteroid2_img = loadImage("asteroid2.png")
  asteroid3_img = loadImage("asteroid3.png")
  missile_img = loadImage("missile.png")
  collisionImg = loadImage("collision.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);
  space = createSprite(windowWidth/2,windowHeight/2)
  space.addImage(bg_img)
  space.velocityY = 4
  rocketPlayer = createSprite(windowWidth/4,windowHeight-150,30,30);
  rocketPlayer.addImage(rocketPlayer_img);
  rocketPlayer.scale = 0.5;
  obstaclesGroup = createGroup()
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  rocketPlayer.debug = true
  rocketPlayer.setCollider("circle",0,0,180)
  lives = 3
  if (space.y>2000){
    space.y = 100
  }
  if (keyDown(RIGHT_ARROW)&&(rocketPlayer.position.x>0&&rocketPlayer.position.x<windowWidth)){
    rocketPlayer.position.x+=10
  }
  if (keyDown(LEFT_ARROW)&&(rocketPlayer.position.x>0&&rocketPlayer.position.x<windowWidth)){
    rocketPlayer.position.x-=10
  }
  if (keyDown("space")){
    shoot()
  }
  /*if (missile.isTouching(obstaclesGroup)){
    missile.velocityY=0
    missile.addImage(collision)
  }*/
  spawnObstacles()
  drawSprites();
  //textSize(30)
  //text((mouseX+","+mouseY,mouseX,mouseY))
}
function spawnObstacles(){
  if (frameCount %120 == 0){
    var obstacle = createSprite(random(0,windowWidth),10,20,20)
    obstacle.velocityY=4
    obstacle.debug = true
    var rand = Math.round(random(1,3))
    switch(rand){
      case 1: obstacle.addImage(asteroid1_img);
              obstacle.scale = 0.3;
              obstacle.velocityX = 3
              break;
      case 2: obstacle.addImage(asteroid2_img);
              obstacle.scale = 0.2;
              //obstacle.velocityX = random
              break;
      case 3: obstacle.addImage(asteroid3_img);
              obstacle.scale = 0.3;
              obstacle.velocityX = -3
              break;
      default: break;

    }
    obstaclesGroup.add(obstacle)
  }
}
function shoot(){
  missile = createSprite(rocketPlayer.position.x,rocketPlayer.position.y,20,20)
  missile.addImage(missile_img)
  missile.velocityY = -12
  missile.scale = 0.1
}
