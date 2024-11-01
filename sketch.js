function setup() {
    createCanvas(400, 400);
    background("rgb(0,0,255)");
  }
  
  function draw() {
    fill("red");
    stroke("");
    if(mouseIsPressed){
      rect(mouseX,mouseY,20,20);
    }
  }
  