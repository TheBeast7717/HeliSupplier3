const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var dropGround,dropGroundFace;

var leftBar,rightBar,upBar,downBar;

var chopper,chopperRightImage,chopperLeftImage;
var chopperHook,chopperHookImage;


var dropBoxLeft,dropBoxLeftFace,dropBoxCenter,dropBoxCenterFace,dropBoxRight,dropBoxRight;


function preload(){
 

  chopperRightImage = loadAnimation("heli-1-removebg-preview.png","heli-2-removebg-preview.png","heli-3-removebg-preview.png","heli-4-removebg-preview.png");
  chopperLeftImage = loadAnimation("heli-1-removebg-preview Left.png","heli-2-removebg-preview Left.png","heli-3-removebg-preview Left.png","heli-4-removebg-preview Left.png");
  
  chopperHookImage = loadImage("MISC_hook_image-removebg-preview.png");
  



}



function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);

  engine = Engine.create();
	world = engine.world;

  var groundOptions = {
    isStatic:true
}

  // Creating dropGround
	dropGround = Bodies.rectangle(windowWidth/2,windowHeight/1.1,5400,15,groundOptions);
	World.add(world,dropGround);

	dropGroundFace = createSprite(dropGround.position.x,dropGround.position.y,5400,10);





  var dropBoxOptions = {
		restitution:0.6
	}

	// creating drop box left
	dropBoxLeft = Bodies.rectangle(windowWidth/2.7,windowHeight/1.6,30,150,dropBoxOptions);
	World.add(world,dropBoxLeft);

	dropBoxLeftFace = createSprite(dropBoxLeft.position.x,dropBoxLeft.position.y,30,150);
	dropBoxLeftFace.shapeColor = "red"


	// creating drop box center
	dropBoxRight = Bodies.rectangle(windowWidth/1.7,windowHeight/1.6,30,150,dropBoxOptions);
	World.add(world,dropBoxRight);

	dropBoxRightFace = createSprite(dropBoxRight.position.x,dropBoxRight.position.y,30,150);
	dropBoxRightFace.shapeColor = "red"

	
	// creating drop box center
	dropBoxCenter = Bodies.rectangle(windowWidth/2.086,windowHeight/4,245,30,dropBoxOptions);
	World.add(world,dropBoxCenter);
	
	dropBoxCenterFace = createSprite(dropBoxCenter.position.x,dropBoxCenter.position.y,245,30);
	dropBoxCenterFace.shapeColor = "red"










  chopper = createSprite(windowWidth/3,windowHeight/6);
  chopper.scale = 1.3;
  chopper.addAnimation("movingRight",chopperRightImage);
	chopper.addAnimation("movingLeft",chopperLeftImage);
	chopper.frameDelay = 2;
  //chopper.debug = true;
	chopper.setCollider("rectangle",-30,0,130,30);

  chopperHook = createSprite(chopper.x,chopper.y+100);
	chopperHook.scale = 0.4;
	chopperHook.addImage(chopperHookImage);
	chopperHook.debug = true;
	chopperHook.setCollider("rectangle",-30,100,80,80);


  // Creaing colliding bars
  upBar = createSprite(windowWidth/2,windowHeight/12,5400,10);


 
 

  box1 = new FreeBox(200,200,40,80);
  box2 = new FreeBox(170,300,60,40);
  


}

function draw() {
  background(220);
  Engine.update(engine);

  // class objects diplay
  
  //box1.display();
 

  box1.display();
  box2.display();
  
  

 
 


  	// dropBoxLeft position
	dropBoxLeftFace.x = dropBoxLeft.position.x;
	dropBoxLeftFace.y = dropBoxLeft.position.y;

	// dropBoxRight position
	dropBoxRightFace.x = dropBoxRight.position.x;
	dropBoxRightFace.y = dropBoxRight.position.y;

	// dropBoxCenter position
	dropBoxCenterFace.x = dropBoxCenter.position.x;
	dropBoxCenterFace.y = dropBoxCenter.position.y;





  // Collisions
  chopper.collide(upBar);

  // Camera options
  camera.on();
	camera.x = chopper.x;

  // Calling functions 
  //chopperMovement();

 



  // specifying positions
  // dropGroundFace position
	dropGroundFace.x = dropGround.position.x;
	dropGroundFace.y = dropGround.position.y;


  // if(keyCode!=DOWN_ARROW){
  //   // box1
  // box1.position.x = chopper.x;
  // box1.position.y = chopper.y;
  // }


  // box1Face.x = box1.position.x;
  // box1Face.y = box1.position.y;



  
	// Hook position
	chopperHook.x = chopper.x;
	chopperHook.y = chopper.y+100;



 



  drawSprites();

}











function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	// dropGround.width = windowWidth;
	// dropGroundFace.width = dropGround.width;
  }

  





  // function chopperMovement(){

  //   if(keyDown("right")){
  //     chopper.changeAnimation("movingRight",chopperRightImage);
  //     chopper.x = chopper.x+12;
  //   chopper.setCollider("rectangle",-30,0,130,30);
  
  //   // chopperHook.setCollider("rectangle",-5,100,40,30);
  //   translation = {x:20, y:0}
	// 	Matter.Body.translate(box1, translation);
  //   }
    
  
  //   if(keyDown("right")&&key==="shift"){
  // 	// chopper.changeAnimation("movingRight",chopperRightImage);
  //     // chopper.x = chopper.x+15;
  // 	// chopper.setCollider("rectangle",-30,0,130,30);
  
  // 	// chopperHook.setCollider("rectangle",-5,100,40,30);
  
  // 	chopper.x = chopper.x+15;
  //   }
  
  
  
  
  
    // if(keyWentUp("right")){
    // chopperHook.setCollider("rectangle",-30,100,40,30);
      
    // }
  
  
  
  
  //   if(keyDown("left")){
  //     chopper.changeAnimation("movingLeft",chopperLeftImage);
  //     chopper.x = chopper.x-12;
  //   chopper.setCollider("rectangle",30,0,130,30);
  
  //   // chopperHook.setCollider("rectangle",-70,100,40,30);
    
  //   translation = {x:-20, y:0}
	// 	Matter.Body.translate(box1, translation);
  
  //   }
  
  //   if(keyWentUp("left")){
  //   // chopperHook.setCollider("rectangle",-30,100,40,30);
  //   }
  
  
  
  
  
  //   if(keyDown("up")&&chopper.y>upBar.y+30){
  //     chopper.y = chopper.y-12;
  //   chopper.scale = chopper.scale-0.013;
  //   chopperHook.scale = chopperHook.scale-0.003;
  //   // chopperHook.setCollider("rectangle",-30,80,40,30);
  
    
  //   }
  
  //   if(keyWentUp("up")){
  //   // chopperHook.setCollider("rectangle",-30,100,40,30);
  
  //   }
  
  
  //   // if(keyDown("down")){
  //   //   chopper.y = chopper.y+12;
  //   // chopper.scale = chopper.scale+0.013;
  //   // chopperHook.scale = chopperHook.scale+0.003;
  //   // // chopperHook.setCollider("rectangle",-30,140,40,30);
  
  //   // }
  
  //   // if(keyWentUp("down")){
  //   // // chopperHook.setCollider("rectangle",-30,100,40,30);
  
  //   // }
  
  
  
  
  
  // }
  
  
  
 
  
  
  // }
  

  // function keyPressed() {
  //   if (keyWentDown("down")) {
  //      // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  //      Matter.Body.setStatic(box1,false);
       
  //    }
    //  if (keyCode === LEFT_ARROW) {
    //   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    //   helicopterSprite.x = helicopterSprite.x - 20;
    //   translation = {x:-20, y:0}
    //   matter.Body.translate(packageBody, translation);
      
    //   }
    //   if (keyCode === RIGHT_ARROW) {
    //   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    //   helicopterSprite.x = helicopterSprite.x + 20;
    //   translation = {x:20, y:0}
    //   matter.Body.translate(packageBody, translation);
  
    //   }
      
    //  }
  










// var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
// var packageBody,ground
// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;

// function preload()
// {
// 	helicopterIMG=loadImage("heli-1-removebg-preview Left.png")
// 	packageIMG=loadImage("package.png");
// }

// function setup() {
// 	createCanvas(800, 700);
// 	rectMode(CENTER);
	

// 	packageSprite=createSprite(width/2, 80, 10,10);
// 	packageSprite.addImage(packageIMG)
// 	packageSprite.scale=0.2

// 	helicopterSprite=createSprite(width/2, 200, 10,10);
// 	helicopterSprite.addImage(helicopterIMG)
// 	helicopterSprite.scale=0.6

// 	groundSprite=createSprite(width/2, height-35, width,10);
// 	groundSprite.shapeColor=color(255)


// 	engine = Engine.create();
// 	world = engine.world;

// 	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
// 	World.add(world, packageBody);
	

// 	//Create a Ground
// 	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
//  	World.add(world, ground);

//  	boxPosition=width/2-100
//  	boxY=610;


//  	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
//  	boxleftSprite.shapeColor=color(255,0,0);

//  	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
//  	World.add(world, boxLeftBody);

//  	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
//  	boxBase.shapeColor=color(255,0,0);

//  	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
//  	World.add(world, boxBottomBody);

//  	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
//  	boxleftSprite.shapeColor=color(255,0,0);

//  	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
//  	World.add(world, boxRightBody);


// 	Engine.run(engine);
  
// }


// function draw() {
//   rectMode(CENTER);
//   background(0);
 
//   packageSprite.x= packageBody.position.x 
//   packageSprite.y= packageBody.position.y 

  
//   drawSprites();
  
  
 
// }





