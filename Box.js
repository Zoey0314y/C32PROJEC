class Box{
    constructor(x,y,width,height){
    
    var options =  {
        isStatic : false
        
    }
    this.Visibility = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  
  
    }
    display(){
    if(this.body.speed < 3){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
       translate(pos.x,pos.y);
       tint (255,this.Visibility);
       rotate(angle);
       rectMode(CENTER);
       stroke ("white");
       strokeWeight(20);
       fill("yellow");
       rect(0,0,this.width,this.height);
       pop();
    }
    else{
       World.remove(world,this.body);
       push ();
       this.Visibilty = this.Visibility - 5;
       pop ();
    }
    }
    score(){
        if(this.Visibility < 0 && this.Visibility > - 105){
            score++;
        }
    }
  }