class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 450,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  
  fly(){
    this.throw.bodyA=null;
  }

  launch(bodyA){
    this.throw.bodyA=bodyA
  }

  display() {
  }
}
