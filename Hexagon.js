class Hexagon{
    constructor(x,y,radius){
        var options={
            'restitution':0.1,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("Images/polygon.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
    }
}