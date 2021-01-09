
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rope1, rope2, rope3,rope4,rope5,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,100,300,10);

	bob1=new Bob(300,350,50);

	bob1.shapeColor="blue";

	bob2=new Bob(350,350,50);

    bob2.shapeColor="blue";

	bob3=new Bob(400,350,50);

	bob3.shapeColor="blue";

	bob4=new Bob(450,350,50);

	bob4.shapeColor="blue";

	bob5=new Bob(500,350,50);

	bob5.shapeColor="blue";

	ground=new Ground(200,700,1200,20);

	ground.shapeColor="red";

	rope1=new Rope(bob1.body,roof.body,-100,0);

	rope2=new Rope(bob2.body,roof.body,-50,0);

	rope3=new Rope(bob3.body,roof.body,0,0);

	rope4=new Rope(bob4.body,roof.body,50,0);

	rope5=new Rope(bob5.body,roof.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){



	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:150,y:-150});
}








}
