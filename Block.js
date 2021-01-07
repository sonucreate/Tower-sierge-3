class Block {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if (this.body.speed<3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //fill("green");
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        this.Visiblity = this.Visiblity-1;
        World.remove(world,this.body);
      
      }
    }
    isTouching(){
      if (this.Visiblity<0 && this.Visiblity>-100){
        console.log("score increased");
        score=score+1;
      }
    }
    };
  