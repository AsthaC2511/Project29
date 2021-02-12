class Box {
    constructor(x, y, width, height){
      var options={
        isStatic:false,
      restitution:0.04,

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width = 30;
      this.height = 40;

      
      
     
      
    }
    display(){
      var pos = this.body.position;
      push ();
      strokeWeight(2);
      
      rectMode(CENTER);
      rect(pos.x,pos.y,30,40);
      pop ();
    }
  
  };