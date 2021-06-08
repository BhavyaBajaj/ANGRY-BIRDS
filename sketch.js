const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3= new Box(700,240,70,70);
    box4= new Box(920,240,70,70);
    box5= new Box(810,160,70,70);
    ground = new Ground(600,height,3000,20);
    pig1=new Pig(810,320);
    pig2=new Pig(810,240)
    Log1= new Log(810,260,300,PI/2)
    Log2= new Log(810,180,310,PI/2)
    Log3= new Log(760,120,150,PI/7)
    Log4= new Log(870,120,150,-PI/7)
    bird= new Bird(100,100)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display()
    pig2.display()
    Log1.display();
    Log2.display();
    Log3.display();
    Log4.display();
    bird.display();
}