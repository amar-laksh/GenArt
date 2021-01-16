w = 1000
const origin1 = 100
const origin2 = 900
midplane = 500
function setup() {
  createCanvas(w, w, WEBGL);
  background(0);
  angleMode(DEGREES);
}

function draw() {
    stroke(random(255), random(255), random(255))
    rotateZ(0)
    translate(-w/2,-w/2)
    strokeWeight(random(2))
    line(origin1, w/2, midplane, random(w))
    line(origin2, w/2, midplane, random(w))
    stroke(random(255), random(255), random(255))
    strokeWeight(millis()/1000)
    line(w/2, 0, w/2, w)
    rotateZ(90)
    translate(w,-w/2)
    stroke(random(255), random(255), random(255))
    strokeWeight(millis()/100)
    line(w/2, 0, w/2, w)
}

