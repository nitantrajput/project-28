class Mango{
    constructor(x,y,diameter){
        var options = {
            isStatic : true,
            'restitution' : 0.5,
            'friction' : 1
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        world.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x , this.body.position.y);
        pop();
    }
}