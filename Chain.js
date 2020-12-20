class chain{
    constructor(bodyA,pointB){
var options = {
    bodyA:bodyA,
    pointB:pointB,
    length:21,
    stiffness:.6
}
this.chain=Matter.Constraint.create(options)
this.pointB=pointB
World.add(world,this.chain)

    }
    display(){
     stroke("aqua")
        if (this.chain.bodyA)
        {line(this.chain.bodyA.position.x+20,this.chain.bodyA.position.y+10,this.pointB.x,this.pointB.y)
      
    }}
    yeet(){
this.chain.bodyA=null

    }
   
}
