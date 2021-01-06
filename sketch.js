var  gameState=0;
var startButton;
var choice=0;
var tag;
var plrScore=0;
var compScore=0;
var ball,ballImage;

function preload(){
 bg1=loadImage("pictures/bg.jpg");
 plr1=loadImage("pictures/player1.png");
 plr2=loadImage("pictures/player2.png");
 plr3=loadImage("pictures/player3.png");
 plr4=loadImage("pictures/player5.png");
 cplr=loadImage("pictures/computer.png");
 ballImage=loadImage("pictures/ball.png");

 field=loadImage("pictures/field.PNG");
 tag=loadImage("pictures/tagName.PNG");
}

function setup(){
 createCanvas(windowWidth-25,windowHeight-30);

computer=createSprite(100,200);

player=createSprite(500,200);

ball=createSprite(width/2,height-100);

startButton=createButton("Start");

button1=createButton("Player 1");

 button2=createButton("Player 2");
 
 button3=createButton("Player 3");

 button4=createButton("Player 4");
 
 playButton=createButton("PLAY");

}

function draw() {

if(gameState==0){
  background(bg1);
  textSize(46);
  textFont("Algerian");
  fill("blue");
  textStyle("Bold");
  text("Welcome to Mini FootBall Game",windowWidth/2-300,windowHeight/2);
  
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  playButton.hide();
  
  startButton.style("width","100px");
  startButton.style("background","orange");
  startButton.position(windowWidth/2,windowHeight/2+50);
  
  startButton.mousePressed(()=>{
    gameState=1;
    
  });
}
if(gameState==1){
  background("green");
  startButton.hide();

  button1.show();
  button2.show();
  button3.show();
  button4.show();
  playButton.show();

  imageMode(CENTER);
  image(plr1,200,windowHeight/2-50,80,50);
  
  button1.style("background","orange");
  button1.position(170,windowHeight/2);

  image(plr2,500,windowHeight/2-50,80,50);
 
  button2.style("background","orange");
  button2.position(470,windowHeight/2);

  image(plr3,800,windowHeight/2-50,80,50);
 
  button3.style("background","orange");
  button3.position(770,windowHeight/2);

  image(plr4,1100,windowHeight/2-50,80,50);
  
  button4.style("background","orange");
  button4.position(1070,windowHeight/2);

  if (choice==1){
    button1.style("background","red");
  }
  if (choice==2){
    button2.style("background","red");
  }
  if (choice==3){
    button3.style("background","red");
  }
  if (choice==4){
    button4.style("background","red");
  }
  button1.mousePressed(()=>{
    choice=1
  });
  button2.mousePressed(()=>{
    choice=2
  });
  button3.mousePressed(()=>{
    choice=3
  });
  button4.mousePressed(()=>{
    choice=4
  });
 
  playButton.style("background","orange");
  playButton.position(windowWidth/2-50,windowHeight/2+200);

  playButton.mousePressed(()=>{
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    playButton.hide();

    if(choice==1){
      player.addImage(plr1);
    }
    if(choice==2){
      player.addImage(plr2);
    }
    if(choice==3){
      player.addImage(plr3);
    }
    if(choice==4){
      player.addImage(plr4);
    }
    gameState=2;
  });
}
if(gameState==2){
background(field);
player.x=200;
player.y= height-120;
player.scale=1.5;

computer.addImage(cplr);
computer.x=width-200;
computer.y=height-120;
computer.scale=1.5;

imageMode(CENTER);
image(tag,width/2,height-30,600,80);

ball.addImage(ballImage);

 drawSprites();
 
 textStyle("Bold");
 textFont("Algebrian")
 fill("black");
 text("Player : "+plrScore,width/2+40,height-20 );
 text("Computer : "+compScore,width/2+180,height-20 );
console.log(mouseX,mouseY);
}

}
/*function keyPressed(){
  if(keyCode==32){
      Gamestate=0;
      Matter.Body.setPosition(//body,{x:200,y:50}); 
  }
}*/