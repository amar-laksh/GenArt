w = 1000
diff = 10
function setup() {
  createCanvas(w, w);
  colorMode(HSB)
  background(52,18,1);
  frameRate(30)
}

function draw() {
    if(diff<w*5)
        background(random(50,52),18,random(10));
    diff+=90
    translate(w/2,w/2)
    rotate(diff)
    for(i = w*2; i-=10;){
        draw_circle(random(i)*noise(w/2),random(100)*noise(w*2))
        draw_circle(random(100)*noise(w/2),random(i)*noise(w*2))
        draw_circle(random(w/2),random(w/2))
    }
    draw_center()
}

function draw_circle(x,y) { 
    fill(random(100),random(100),random(100))
    stroke(0)
    circle(x,y,random(1,22))

}

function draw_center() {
    translate(-w/2,-w/2)
    fill(random(100),random(100),random(80))
    stroke(random(100),0,random(100))
    circle(w/2,w/2,random(40,60))

}
