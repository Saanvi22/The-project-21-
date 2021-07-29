
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball; 
var groundObj; 
var wallRight,wallLeft; 
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;


	var op = {
		isStatic:false, 
		restitution:0.3,
		friction:0,
		density:1.2,
	}; 

	//Create the Bodies Here.

	groundObj =new Ground(500,490,1000,10); 
	wallRight = new Ground(790, 440, 10, 105);
	wallLeft = new Ground(590, 440, 10, 105); 

	ball = Bodies.circle (200,100,10,op); 
  World.add (world,ball); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  wallLeft.display(); 
  wallRight.display(); 
  
  ellipse(ball.position.x,ball.position.y,10);


groundObj.display(); 

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.94,y:-0.84});
	}
}




