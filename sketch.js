//1.Declaration of Physics Engine.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


//2.Local objects creation.
var engine, world, ground;
var ball;

function setup() {
  var canvas = createCanvas(400,400);

  //2.Giving values / duties to local objects.
  engine = Engine.create();
  world = engine.world;
  
  //3.Defining the properties of components. 
  var ground_options = {
      isStatic : true
  }


  //4.Creating ground component from the Bodies.
  ground = Bodies.rectangle(200,390,200,20,ground_options);

  //5.Adding the component to the World.
  World.add(world,ground);

  //ball:properties
  var ball_options = {
    restitution : 1.5
  }

  //ball:bodies
  ball = Bodies.circle(200,100,20,ball_options);


  //ball:World
  World.add(world,ball);

}

function draw() {
  background(0);

  //2.Updating the physics engine as per local object.
  Engine.update(engine);
  
  //6.Writing the display command.
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  //ball:display.
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}