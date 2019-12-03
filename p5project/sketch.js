function setup() {
	createCanvas (400, 400);
}
var radius = 200;
function draw() {
	radius+=1;
	background(75,10);
	fill(1, 10, frameCount % 255);
	console.log(frameCount % 255);
	ellipse(200,200, 300, 300);
  	stroke(255);

  let x1 = 100;
  let y1 = 90;
  let x2 = mouseX;
  let y2 = mouseY;

  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 20, 20);

  point(random(0,width),random(0,height));

if (mouseIsPressed) {
    ellipse(200,200, 300, 300);
    fill("#fae");
  } else {
    ellipse(200, 200, 300, radius);
    fill("#blue");
  }
  
  textAlign(CENTER);
  textSize(50);
  text("ellipse", 200, 200);
}
