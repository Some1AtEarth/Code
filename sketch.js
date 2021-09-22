var ball;

function setup() {
  createCanvas(600,600);
  ball = createSprite (200, 200, 40, 40)
  ball.shapeColor = "#45678a"
}

function draw() 
{
  background("#148965");
  textSize(50)
  fill("#09ef48")
  text("Code", 300, 300)
  if (keyDown("down")) {
    //ball.velocityY = 1
    //ball.velocityX = 0
    ball.y = ball.y + 1
    ball.shapeColor = "#ed9832"
  }
  if (keyDown("up")) {
    //ball.velocityY = -1
    //ball.velocityX = 0
    ball.y = ball.y - 1
    ball.shapeColor = "#dc023c"
  }
  if (keyDown("left")) {
    //ball.velocityY = 0
    //ball.velocityX = -1
    ball.x = ball.x - 1
    ball.shapeColor = "#4ff03a"
  }
  if (keyDown("right")) {
    //ball.velocityY = 0
    //ball.velocityX = 1
    ball.x = ball.x + 1
    ball.shapeColor = "#30e00a"
  }
  drawSprites()

}




