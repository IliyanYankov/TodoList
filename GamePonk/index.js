//Gettin elements
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//Giving canvas wids and height
canvas.width = 600;
canvas.heigth = 600;

//Making circle
const circle = {
  w: 200,
  h: 200,
  radius: 25,
  dx: 5,
  dy: 2,
};

//Making Rectangle
const rectLeft = {
  w: 10,
  h: 200,
  radius: 25,
  dx: 10,
  dy: 80,
  speedRectUp: 0,
  speedRectDown: 0,
};

//Drawing circle
function drawcircle() {
  ctx.beginPath();
  ctx.arc(circle.w, circle.h, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
}

//Drawing Rectangle
function drawRect() {
  ctx.beginPath();
  ctx.rect(rectLeft.w, rectLeft.h, rectLeft.dx, rectLeft.dy);
  ctx.fillStyle = "blue";
  ctx.fill();
}

//Circle moves
function circleMoves() {
  circle.w -= circle.dx;
  circle.h += circle.dy;
}

//Rectangle moves
function rectValue() {
  rectLeft.h += rectLeft.speedRectUp;
  rectLeft.h += rectLeft.speedRectDown;
}

//Clearing canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.heigth);
}

//Detectig wals for ball
function detectCollisionCircle() {
  //|| circle.w - circle.radius < 0
  if (circle.w + circle.radius > canvas.width) {
    circle.dx = circle.dx * -1;
  }
  if (
    circle.h + circle.radius > canvas.heigth ||
    circle.h - circle.radius < 0
  ) {
    circle.dy = circle.dy * -1;
  }
}

//Adding eventlistener for Rectangle
document.addEventListener("keydown", moveRectLeft);
document.addEventListener("keyup", moveRect);

//Moving rect with keys
function moveRectLeft(e) {
  if (e.key === "ArrowDown") {
    rectLeft.speedRectDown += 12;
  } else if (e.key === "ArrowUp") {
    rectLeft.speedRectUp -= 12;
  }
}

//Move only rect only when key is pressed
function moveRect(e) {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    rectLeft.speedRectUp = 0;
    rectLeft.speedRectDown = 0;
  }
}

//Detect collision for Rect
function detectCollisionRectLef() {
  if (rectLeft.h + rectLeft.dy > canvas.heigth) {
    rectLeft.speedRectDown = 0;
  } else if (rectLeft.h < 0) {
    rectLeft.speedRectUp = 0;
  }
}

//Checgking to touch rect and ball
function checkForRectAndCircleCol() {
  const result = Math.sqrt(
    Math.pow(rectLeft.w - circle.w, 2) + Math.pow(rectLeft.h - circle.h, 2)
  );

  if (result < circle.radius - circle.w + rectLeft.dy) {
    circle.dx = circle.dx * -1;
  }
}

//Checking if whe miss the ball
function checkLost() {
  if (circle.w + circle.radius < 0) {
    ctx.font = "60px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("You LOST", canvas.width / 2, canvas.height / 2);
  }
}

//Store all function
function move() {
  clearCanvas();
  checkForRectAndCircleCol();
  detectCollisionRectLef();
  circleMoves();
  drawcircle();
  drawRect();
  rectValue();
  detectCollisionCircle();
  checkLost();

  //Repeat the function
  requestAnimationFrame(move);
}
//Calling the function
move();
