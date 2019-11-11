let phase = 0;
let zoff = 0;
let noiseMax = 10;
function setup(){
  createCanvas(windowWidth, windowHeight);
}
function draw(){
  background(0, 50);
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let a = 0; a <TWO_PI; a += 0.01){
    let xoff = map(sin(a + phase), -1, 0, 1, noiseMax);
    let yoff = map(cos(a +phase), -1, 0, 1, noiseMax);
    let r = map(noise(xoff, yoff), 0, 1, 100, height/2);
    let x = -r * sin(a);
    let y = r * cos(a);
    vertex(y,x);
  }
  endShape(CLOSE);
phase += 0.1;
zoff += 0.1;
}
