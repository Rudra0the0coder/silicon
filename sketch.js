var backgroungImg,back;
var player,playerImg;
var Ground;
var rock,rockImg,algea,algeaImg,shark,sharkImg;
var random;
var obst;
var gameState = "start";
var score;
var beach,beachImg;


function preload(){
  backgroungImg = loadImage("ocea.jpg");
  playerImg = loadImage("player.png");
  rockImg  = loadImage("rock.png");
  algeaImg =loadImage("algea.png");
  sharkImg = loadImage("shark.png");
  beachImg = loadImage("beach.png");
}
function setup() {
  createCanvas(1300,800);
  beach = createSprite(640,560);
  beach.addImage(beachImg);
  beach.visible = false;
  beach.scale = 2.2;
  //background
  back = createSprite(50,200);
  back.addImage("ocean",backgroungImg);
  back.scale =2.8;
  back.velocityX = 0;
  back.visible = false;

  // player
  player = createSprite(500,500,10,10);
  player.addImage("player",playerImg);
  player.scale = 0.6;
  player.visible = false;
  console.log(player.y);
  player.debug = true;
  player.velocityX= 0;
  player.setCollider("rectangle",-50,-50,150,150)
  
   //invisible ground;
 Ground = createSprite(500,700,1300,40);
 Ground.visible = false;
 Ground.debug = true;
 obst = new Group();


 score = 0;

}


function draw() {
  background("cyan");
  textSize(50);
  fill("red");
  text("Score"+ score,1000,250);
  if(gameState === "start"){
    
    textSize(30);
    fill("red");
    text("You are Entered in the Jungle Quest complete 2000 score in surfing then ",50,100);
   text("you are able to come on next level good luck. press 's' to start",50,140);
   beach.visible = true;


  
 
  }
 
 
  if (keyDown("s") && gameState === "start") {
    gameState = "play";
    beach.visible = false;
  
  }


 

 if(gameState === "play"){

  

  obstacles();
  back.visible = true;
  player.visible= true;

  //background velocity
  back.velocityX = -8;
  //making background move
  if(back.x<0){
    
  back.x = 1000;
  }
score = score+ Math.round(frameCount/60);
  //make player jump
  if (keyDown("space")&& player.y >=500) {
    player.velocityY  = -20;
  
  }
// adding gravity
  player.velocityY = player.velocityY+0.8;
 
  // collidng
  player.collide(Ground);

  
 
if (obst.isTouching(player)) {
  gameState = "end";
}
}

if (gameState === "end") {
  player.velocityX = 0;
  player.velocityY = 0;
  back.velocityX = 0;
  obst.setVelocityXEach(0);
}

  
  drawSprites();
}

function obstacles(){
   
  if(frameCount%250===0){
    rock = createSprite(1300,540,10,10);
    rock.velocityX = -10;
    rock.y = Math.round(random(520,620));
    
    var i = Math.round(random(1,3));
    switch(i){
      case 1 : rock.addImage(rockImg);
      break;
      case 2 : rock.addImage(algeaImg); 
      break;
      case 3 : rock.addImage(sharkImg);
      break;
      default : break;
    }

  rock.scale = 0.05;
  rock.lifetime = 700;
  obst.add(rock);
  }


}
//Add a scoring system- if player touches obstacles then minus points.If player touches pearls , then add points
//With score increasing, velocity of obstacle should increase
//gamestate
//rn 9833028724

//which is the largest jungle in the world - amazon.
//which is the largest river in the world - nile.
//which is the largest flower in the world - Rafflesia.
//which is the largest mountain in the world - Mount Everest
//which is the largest mountain in the india - Kangchenjunga 