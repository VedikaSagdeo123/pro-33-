  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;

var snowFlakes=[];
var bg
function preload(){
  bg=loadImage("snow3.jpg")
}


function setup() {
 createCanvas(800,400)
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(bg); 

  Engine.update(engine);

   if(frameCount%20===0){
  snowFlakes.push(new Snow(random(width/2-400,width/2+400),10,50))
   } 
   for (var v = 0; v < snowFlakes.length; v++) {
   snowFlakes[v].display();
   }
}