
const Engine = Matter.Engine;
const world = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var ground , tree , tree2;
var boy , boyImg;
var pathar;
var mango1 , mango2 , mango3 , mango4 , mango5 , mango6 , mango7 , mango8 , mango9 , mango10; 

function preload(){
    


}
function setup(){
    createCanvas(1000 , 650);

    engine = Engine.create();
    world = engine.world

    ground = new Ground();
    pathar = new Pathar(100,460,23);
    mango1 = new Mango (600,290,34);
    mango2 = new Mango (855,290,35);
    mango3 = new Mango (670,290,35);
    mango4 = new Mango (730,290,35);
    mango5 = new Mango (710,290,36);
    mango6 = new Mango (780,290,35);
    mango7 = new Mango (825,290,33);
    mango8 = new Mango (880,290,35);
    mango9 = new Mango (940,290,35);
    mango10 = new Mango(980,290,35);
    
    attach = new Throw(pathar.body,{x : 100 , y : 465})

    tree = createSprite(775,368)
    tree.addImage(treeImg);


    boy = createSprite(160,550);
    boy.addImage(boyImg);


    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background("bloack")

    collision(pathar,mango1);
    collision(pathar,mango2);
    collision(pathar,mango3);
    collision(pathar,mango4);
    collision(pathar,mango5);
    collision(pathar,mango6);
    collision(pathar,mango7);
    collision(pathar,mango8);
    collision(pathar,mango9);
    collision(pathar,mango10);

    drawSprites();

    pathar.display();
    ground.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pathar.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
    attach.fly();
}

function collision(pathar,mango){

    if(pathar.body.position.x - mango.body.position.x < mango.diameter + pathar.diameter 
        && mango.body.position.x - pather.body.position.x < mango.diameter + pathar.diameter
        && pathar.body.position.y - mango.body.position.y < mango.diameter + pathar.diameter 
        && mango.body.position.y - pather.body.position.y < mango.diameter + pathar.diameter){
        Matter.Body.setStatic(mango.body,false);
    }

}

function keyPressed(){
    if(keyCode = 12){
        Matter.Body.setPosition(pathar.body,{x:100,y:455})
        attach.Launch(pathar.body)
    }
}