let angle = 0
let objectScale = 1
let greenHalfCircle = {
x: 0,
y: 0,
xWidth: 300,
yHeight: 300,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'green',
transX: 300,
transY: 300,
xspeed: 2,
yspeed: -6,
}


let whiteHalfCircle = {
x: 0,
y: 0,
xWidth: 290,
yHeight: 290,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 255,
transX: 300,
transY: 300,
xspeed: 4,
yspeed: -5,
}


let redHalfCircle = {
x: 0,
y: 0,
xWidth: 285,
yHeight: 270,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'red',
transX: 300,
transY: 300,
xspeed: 1,
yspeed: -3,
}


let pinkHalfCircle = {
x: 0,
y: 0,
xWidth: 200,
yHeight: 270,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'pink',
transX: 300,
transY: 300,
xspeed: -.5,
yspeed: -1,
}
// let halfCircles = [greenHalfCircle, whiteHalfCircle, redHalfCircle, pinkHalfCircle];
// let halfCirclePosition = [];
//
// // let seeds = [seed01, seed02, seed03, seed04, seed05, seed06, seed07];

let watermelonFromClass01;
let watermelonFromClass02;
let watermelonFromClass03;
let watermelonFromClass04;

function setup() {
// put setup code here


// for (i = 0; halfCircles.length; i++){
//   halfCirclePosition[i] = new Watermelon(halfCircles[i]);
// }
watermelonFromClass01 = new Watermelon(greenHalfCircle);
watermelonFromClass02 = new Watermelon(whiteHalfCircle);
watermelonFromClass03 = new Watermelon(redHalfCircle);
watermelonFromClass04 = new Watermelon(pinkHalfCircle);

createCanvas(600, 600);
}

function draw() {
// put drawing code here
background(135);

watermelonFromClass01.drawHalfCircle();
watermelonFromClass02.drawHalfCircle();
watermelonFromClass03.drawHalfCircle();
watermelonFromClass04.drawHalfCircle();
// drawHalfCircle(whiteHalfCircle);
// drawHalfCircle(redHalfCircle);
// drawHalfCircle(pinkHalfCircle);
}
class Watermelon {
  constructor(saidGeo){
    this.saidGeo = saidGeo;
  }
    drawHalfCircle() {
      push();
      noStroke();
      translate(this.saidGeo.transX, this.saidGeo.transY)
      fill(this.saidGeo.color)
      arc(this.saidGeo.x, this.saidGeo.y, this.saidGeo.xWidth, this.saidGeo.yHeight, this.saidGeo.start, this.saidGeo.HowMuchPi)
      pop();
    }
  }

// }
// function drawHalfCircle(saidGeo) {
// push();
// noStroke();
// translate(saidGeo.transX, saidGeo.transY)
// fill(saidGeo.color)
// arc(saidGeo.x, saidGeo.y, saidGeo.xWidth, saidGeo.yHeight, saidGeo.start, saidGeo.HowMuchPi)
// pop();
// }
