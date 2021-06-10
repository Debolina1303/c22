const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies

var engine,world,ball,ground

function setup() {
 var canvas = createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  var option = {isStatic:true}

  var drop = {restitution:1.0}
ball=Bodies.circle(200,100,20,drop);
World.add(world,ball);
ground=Bodies.rectangle(200,390,200,20,option)
World.add(world,ground)
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);

  fill("white")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  

}