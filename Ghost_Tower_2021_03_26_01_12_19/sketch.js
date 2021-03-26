var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImage, climber, climberGroup
var ghostImage, ghost
var gameState="play"
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  doorsGroup= new Group()
  climberGroup= new Group()
}

function setup(){
  createCanvas(500,600);
  //spookySound.loop();
  tower = createSprite(260,300);
  tower.scale=0.9
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(200,200)
  ghost.addImage(ghostImage)
  ghost.scale= 0.5
  
  doorsGroup = new Group();
}

function draw(){
  background(0);
  if(gameState==="play"){
    
  
   
  
    if(tower.y > 400){
      tower.y = 300
    }
  if(keyDown("space")){
    ghost.velocityY=-4
  }
  if(keyDown("left_arrow")){
    ghost.velocityX=-4
  }
  if(keyDown("right_arrow")){
    ghost.velocityX=4
  }
  if(climberGroup.isTouching(ghost)){
    ghost.destroy();
    gameState="end"
  }
  ghost.velocityY=ghost.velocityY+0.5
    spawnDoors();

    
    
    drawSprites();
  }
  if(gameState==="end"){
    text("GAME OVER",300,300)
  }

}

function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var door = createSprite(200, 100);
    
    door.x = Math.round(random(120,400));
var climber=createSprite(door.x,door.y+60)
climber.addImage(climberImage)
    
    door.addImage(doorImg);
    
    door.velocityY = 1;
climber.velocityY=1
   
    //assign lifetime to the variable
    door.lifetime = 800;
climber.lifetime= 800;
    
    //add each door to the group
    doorsGroup.add(door);
    climberGroup.add(climber);
  }
}

