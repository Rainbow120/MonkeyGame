var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground, groundImage, invisibleGround;


function preload(){
 monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  groundImage = loadImage("Grass.png");
}

function setup() {
  createCanvas(400,400);
  
  invisibleGround = createSprite(200,350,400,10);
  invisibleGround.visible = false;

  ground = createSprite(200,350,400,10);
  ground.addImage(groundImage);
  ground.velocityX = -5;
  ground.scale = 1.3;
  
  monkey = createSprite(50,350,50,50);
  monkey.addAnimation("monkeyRunning",monkey_running);
  monkey.scale = 0.125;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
   background("lightblue")
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(invisibleGround);
  
  if(ground.x<100){
    ground.x = ground.width/2;
  }
  
  spawnBananas();
  spawnObstacles();
  
  var survivalTime = 0;
  score = 0;
  
  stroke("white");
  textSize(15);
  fill("white");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,250,50);
  text("Score: "+ score,300,25);
  
  drawSprites();
}

function spawnBananas(){
  if(frameCount % 80 === 0){
   var banana = createSprite(350,Math.round(random(120,200),10,10));
   banana.addImage(bananaImage);
   banana.scale = 0.075;
   banana.velocityX = -3;
    
   banana.lifetime = 120;
    
   banana.depth = monkey.depth;
   monkey.depth = monkey.depth+1;
  
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(350,342.5,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;

    obstacle.velocityX = -4.5;
    
    obstacle.lifetime = 120;
  }
}