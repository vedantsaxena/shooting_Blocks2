class Block{
    constructor(x,y,width,height){
        var options={
            'restitution':0.2,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.visibility = 255;
        this.image = loadImage("Images/rect.png")
    }
    display(){
        //console.log("Console>>>>"+this.body.speed);
        if (this.body.speed<2){
        var pos = this.body.position;     
        fill(0,255,255);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        }else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility-10;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,30,60);
            pop();
        }
    }
}