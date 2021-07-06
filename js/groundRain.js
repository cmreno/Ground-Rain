/*Cody Reno / N320 / Module 1 */

function setup() {
  createCanvas(800, 600); //creates canvas

  class colors {
    red = 100; //starting r value
    blue = 100; //starting blue value
    green = 100; //starting green value
  }

  class raindrop {
    constructor(xPos, yPos, yVel) {
      //sets xposition, yposition, and velocity per drop
      xPos = rand(0, 590); //sets xpos as random
      yPos = 0; //starts at top (0)
      yVel = 2; //default velocity
      fill("blue"); //blue drops
      rect(this.xPos, this.yPos, 2, 2); //creates square raindrop
    }
  }
}

function draw() {
  var drops = 0;
  background("lightblue"); //background color
  fill(rgb(colors.red, colors.blue, colors.green)); //color of rectangle
  rect(0, 400, 800, 200); //creates rectangle for bottom of canvas

  while (drops <= 500) {
    var rain = new raindrop();

    if (rain.yPos >= 600) {
      //checks if rain hits ground
      rain.hide(); //hides rain drop
      drops = drops + 1;
    }
  }
}
