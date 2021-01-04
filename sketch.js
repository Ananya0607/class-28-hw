
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,mango1,mango2,mango3,mango4,boy,tree;
function preload()
{
	tree.loadImage("tree.png");
	boy.loadImage("boy.png");
	stone.loadImage("stone.png");
	mango1.loadImage("mango.png");
	mango2.loadImage("mango.png");
	mango3.loadImage("mango.png");
    mango4.loadImage("mango.png");
}

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,300,1200,20);
	tree=new Tree(1100,300,50,70);
	boy=new boy(-10,300,50,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  tree.display();
  stone.display();
  ground.display();
  boy.display();
  

  
  drawSprites();
 
}



