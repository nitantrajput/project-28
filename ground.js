class Ground{
    constructor(){
        var options = {
            isStatic : true,
            friction:0.4
        }
        this.body = Bodies.rectangle(500,625,1250,20);
        World.add(world,this.body);
    }
    display(){
        rectmode(CENTER);
        fill("grey");
        rect(500,625,1200,20);
    }
}