class Snowflake{

  constructor(){
    let x = random(width);
    let y = random(-100,-10);
    
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector();
    this.r = random(4,8);
  }
  
  render(){
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y)
  }
  
  applyForce(force){
    let f = force.copy();
    this.acc.add(f);
  }

  fall(){
 this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  offScreen(){
    return(this.pos.y > height + this.r);

  }
}