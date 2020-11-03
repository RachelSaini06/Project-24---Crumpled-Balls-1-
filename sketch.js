const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1, dustbin2, dustbin3;

function preload(){
  
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 650, width, 100);
	
	paper = new Paper(width/2 - 300, 100, 40);

	dustbin1 = new Dustbin(width/2 + 260, 590, 175, 20);
	dustbin2 = new Dustbin(width/2 + 170, 560, 20, 75);
	dustbin3 = new Dustbin(width/2 + 350, 560, 20, 75);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  strokeWeight(4);

  ground.display();

  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();


  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 60, y: -60});
	}
}
