
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball1
var box1,box2,box3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(400,680,800,10)
	ball1=new ball(100,400,30)
	box1=new Ground(550,625,10,100)
	box2=new Ground(700,625,10,100)
	box3=new Ground(625,670,150,10)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ball1.display()
  box1.display()
  box2.display()
  box3.display()
  drawSprites();
 
}
function keyPressed(){
if (keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:120,y:-120})

}



}


