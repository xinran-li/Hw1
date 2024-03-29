var bubbles = [];

function setup() {
  createCanvas(600, 800);

  for (var i = 0; i < 20; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(5, 50)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(200);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(200, 200, 200, 200);
    } else {
      fill(200, 220, 200, 100);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 1);
    bubble.x += random(-10, 10);
    bubble.y += random(-10, 10);
  }
}
