var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line1,line2,line3;
var boxLeft,boxBase,boxRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	line1 = Bodies.rectangle(275,610,20,100,{isStatic:true});
	World.add(world, line1);

	line2 = Bodies.rectangle(375,650,200,20,{isStatic:true});
	World.add(world, line2);

    line3 = Bodies.rectangle(475,610,20,100,{isStatic:true});
	World.add(world, line3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	var package_options={
        restitution : 0.3
	}


	var package_options={
		isStatic : false
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boxLeft = createSprite(line1.position.x,line1.position.y,20,100);
  boxLeft.shapeColor = "red";
  boxBase = createSprite(line2.position.x,line2.position.y,200,20);
  boxLeft.shapeColor = "red";
  boxRight = createSprite(line3.position.x,line3.position.y,20,100);
  boxLeft.shapeColor = "red";
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.collide(line1);
  packageSprite.collide(line2);
  packageSprite.collide(line3);
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false);
  
  }
}



