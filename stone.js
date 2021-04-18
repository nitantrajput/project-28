class Pathar{
    constructor(x,y,diameter){
        var options = {
            isStatic : false,
            retitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        world.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x , this.body.position.y);
        imageMode(CENTER);
        pop();
    }
}