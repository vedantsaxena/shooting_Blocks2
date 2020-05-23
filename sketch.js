const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;
var world,engine;
var polygon,sling;
var ground,ground1,ground2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

polygon = new Hexagon(80,180,40);
sling = new Sling(polygon.body,{x:120,y:180});
ground = new Ground(400,390,800,20);
ground1 = new Ground(370,240,200,10);
ground2 = new Ground(700,180,150,10);
b1 = new Block(340,215,30,40);
b2 = new Block(355,215,30,40);
b3 = new Block(370,215,30,40);
b4 = new Block(385,215,30,40);
b5 = new Block(400,215,30,40);
b6 = new Block(355,190,30,40);
b7 = new Block(370,190,30,40);
b8 = new Block(385,190,30,40);
b9 = new Block(370,170,30,40);
bl1 = new Block(670,160,30,40);
bl2 = new Block(685,160,30,40);
bl3 = new Block(700,160,30,40);
bl4 = new Block(715,160,30,40);
bl5 = new Block(730,160,30,40);
bl6 = new Block(685,140,30,40);
bl7 = new Block(700,140,30,40);
bl8 = new Block(715,140,30,40);
bl9 = new Block(700,120,30,40);

  
}

function draw() {
  background(0);
  Engine.update(engine);
  
  polygon.display();
  sling.display();
  ground.display();
  ground1.display();
  ground2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  bl1.display();
  bl2.display();
  bl3.display();
  bl4.display();
  bl5.display();
  bl6.display();
  bl7.display();
  bl8.display();
  bl9.display();


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly();
}