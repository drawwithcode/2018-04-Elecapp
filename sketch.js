var song;

function preload() {
  song = loadSound('addons/Night_Time_Sound_Effect.mp3');



}

let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Mingray Mono');
  textSize(18);
  frameRate(24);
  song.loop();
}


function mousePressed() {
  let r = random(1, 8);
  let b = new Star(mouseX, mouseY, r);
  stars.push(b);
}

function mouseDragged() {
  let r = random(1, 8);
  let b = new Star(mouseX, mouseY, r);
  stars.push(b);
}

function draw() {
  background(lerpColor(color('#f28500'), color('#130a66'), frameCount / 100));

  if (frameCount > 100) {
    fill('white');
    text('The sun set, but the sky looks empty. Click or drag your mouse to draw some stars', 250, height / 2);
    for (let star of stars) {
      star.move();
      star.show();
    }



    for (let i = 0; i < stars.length; i++) {
      stars[i].move();
      stars[i].show();
    }
  }



}

function Star(_x, _y, _r) {
  this.x = _x;
  this.y = _y;
  this.r = _r;
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
