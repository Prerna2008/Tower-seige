
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var options={isStatic:true}
    g1=Bodies.rectangle(500,600,300,20,options)
World.add(world,g1)



 box1=new box(390,590,40,50)
 box2=new box(420,590,40,50)
 box3=new box(460,590,40,50)
 box4=new box(500,590,40,50)
 box5=new box(540,590,40,50)
 box6=new box(580,590,40,50)
 box7=new box(420,550,40,50)
 box8=new box(460,565,40,50)
 box9=new box(500,565,40,50)
 box10=new box(540,565,40,50)
 box11=new box(580,565,40,50)
 box12=new box(620,565,40,50)
 box13=new box(460,540,40,50)
 box14=new box(500,540,40,50)
 box15=new box(540,540,40,50)
 box16=new box(500,515,40,50)

ball1=new ball(200,690,20)
chuno=new chain(ball1.body,{x:200,y:200})
 Engine.run(engine);
 
}


function draw() {
    rectMode(CENTER)
  background(0);
  rect(g1.position.x,g1.position.y,300,20)

  drawSprites();
  Engine.update(engine)
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
ball1.display()
chuno.display()
}
function mouseDragged(){Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})}
function mouseReleased(){chuno.yeet()} 
	

	

