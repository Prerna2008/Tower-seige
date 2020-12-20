class ball{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.width = radius;
        
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.width,this.width);
        pop();
      }
}