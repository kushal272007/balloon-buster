


var redbImage,bluebImage,greenbImage,pinkbImage,backgroundImage
var reds,blues,greens,pinks,bows,arrows,bowimage,arrowimage
var score=0
var blueg,greeng,pinkg,redg,arrowg
function preload(){
 redbImage=loadImage("red_balloon0.png") 
  bluebImage=loadImage("blue_balloon0.png") 
   greenbImage=loadImage("green_balloon0.png") 
   pinkbImage=loadImage("pink_balloon0.png") 
  backgroundImage=loadImage("background0.png")
   bowimage=loadImage("bow0.png")
  arrowimage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  bows=createSprite(500,500,30,30)
 bows.addImage("bow",bowimage) 
redg=createGroup() 
  blueg=createGroup()
   greeng=createGroup()
   pinkg=createGroup()
   arrowg=createGroup()
  
  
  
}

function draw() {
  background(backgroundImage)
  bows.y=mouseY
  score=score+1
  if (keyDown("space")){
    populateArrows()
  }
  if (frameCount%90==0){
    
  
  var i =Math.round(random(1,4))
  switch(i)
    {
      case 1:populateRedBalloons()
        break
        case 2:populateblueBalloons()
        break
        case 3:populategreenBalloons()
        break
        case 4:populatepinkBalloons()
        break
    }
    }
    if (arrowg.isTouching(redg)){
     arrowg.destroyEach() 
      redg.destroyEach()
    }
    if (arrowg.isTouching(greeng)){
     arrowg.destroyEach() 
      greeng.destroyEach()
    }
    if (arrowg.isTouching(blueg)){
     arrowg.destroyEach() 
      blueg.destroyEach()
    }
    if (arrowg.isTouching(pinkg)){
     arrowg.destroyEach() 
      pinkg.destroyEach()
    }
drawSprites()
  text("score="+score,100,300)
  
}
function populateRedBalloons(){
  var i=Math.round(random(20,550))
  reds=createSprite(30,i,10,10)
  reds.addImage("kushal", redbImage)
  reds.scale=0.1
  reds.velocityY=-5
  redg.add(reds)
}
function populateblueBalloons(){
  var i=Math.round(random(50,500))
  blues=createSprite(70,i,10,10)
  blues.addImage("kushal", bluebImage)
  blues.scale=0.1
  blues.velocityY=-5
  blueg.add(blues)
}
function populategreenBalloons(){
  var i=Math.round(random(80,450))
  greens=createSprite(110,i,10,10)
  greens.addImage("kushal", greenbImage)
  greens.scale=0.1
  greens.velocityY=-5
  greeng.add(greens)
}
function populatepinkBalloons(){
  var i=Math.round(random(110,400))
  pinks=createSprite(150,i,10,10)
  pinks.addImage("kushal", pinkbImage)
  pinks.scale=1.0
  pinks.velocityY=-5
  pinkg.add(pinks)
}
function populateArrows(){
  arrows=createSprite(500,250,30,30)
  arrows.addImage("kushal",arrowimage)
  arrows.velocityX=-5
  arrows.scale=0.5
  arrows.y=bows.y
  arrowg.add(arrows)
}
