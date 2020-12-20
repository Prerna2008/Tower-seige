class box {
    constructor(x, y, width, height) {
      var options={
      "restitution":1,
       'density':.5 ,
      'friction':0.7}
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill(255);
      rotate(angle)
      rect(0,0,this.width, this.height);
      pop()
    }
  };
  