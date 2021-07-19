var path,runner
var pathImg,runnerIMG
var invisblepath_1,invisiblepath_2

function preload(){
  pathImg = loadImage("path.png")
  runner_running = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale = 1.2

  runner = createSprite(200,200,10,10)
  runner.addAnimation("running", runner_running)
  runner.velocityY = -1
  runner.scale = 0.1
invisiblepath_2 = createSprite(50,200,50,600)
invisiblepath_2 .visible = false

invisiblepath_1 = createSprite(350,200,50,600)
invisiblepath_1 .visible = false




}


function draw() {
  background(0);
  runner.x = World.mouseX

  drawSprites()
  if(path.y > 400){
    path.y = height/2
  }
  
}
