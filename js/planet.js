const w = 1000
m = []
f = 1
function random_point() {
  r = w/4 * sqrt(random())
  t = random(TAU)
  return [
    w/2 + sin(t) * r,
    w/2 + cos(t) * r 
  ]
}

function setup() {
    createCanvas(w, w);
    frameRate(30)
    colorMode(HSB)
    background(0)
    k = w / 2
    m = (Array(w).fill(0)).map(random_point)
}

function draw() {
    h = 1
    for (i = k; --i;) {
        if(i % 80 == 0){
            f *= -1
        }
        [x, y] = m[i]
        x = x + (sin(n = noise(x / 400, y / 400) * TAU) * h * f)
        y =  y + (cos(n) * h * f)
        stroke(y-50,355,255)
        circle(x, y, random(.01, .2))
        if (pow(k - x, 2) + pow(k - y, 2) < 6e4) { // if point is in circle
          m[i] = [x, y, t]
        } else {
            m[i] = random_point() // replace with new point if not
        }
  }
}
