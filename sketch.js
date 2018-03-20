// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Video: https://youtu.be/H81Tdrmz2LA

// Original GIF: https://beesandbombs.tumblr.com/post/149654056864/cube-wave

let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(600, 600, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 300, 300);
}

function draw() {
  background(100);
  ortho(-400, 400, 400, -400, 0, 1000);
  rotateX(-ma);
  rotateY(-QUARTER_PI)﻿

  function keepbetween(x){
      if (x > 1) {
          return 1;
      }
      if (x < -1) {
          return -1;
      }
      return x;
  }

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(keepbetween(tan(a)), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w, h, w);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);
      pop();
    }
  }

  angle -= 0.1;
}
