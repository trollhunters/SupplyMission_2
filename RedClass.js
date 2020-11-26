class Red {
    constructor(x, y, width, height) {
      var options = {
          static:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      
      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("red");
        }
  };
  