//it will be loaded without fetching  images and async functions

document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("ping-pong-table"); //targeting the table element
  let ball = document.getElementById("ball"); //targeting the ball element

  let paddle = document.getElementById("paddle"); //targeting the paddle element

  let ballX = 50; //distance of the top of the ball of ping-pong table
  let ballY = 50; //distance of the left of the ball of ping-pong table

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  let dx = 2; //displacement of the ball in x direction 2-> distance +positive direction -2 negative side
  let dy = 2; //displacement of the ball in y direction 2-> distance +positive direction -2 negative side

  setInterval(function exec() {
    ballX += dx; //updating the x coordinate of ball
    ballY += dy; //updating the y coordinate of ball

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // if(ballX > 680 || ballX <= 0){
    //     dx *= -1;
    // }

    // if(ballY > 380 || ballY <= 0){
    //     dy *= -1;
    // }

    //collision detection with ball and paddle
    if (
      ballX < paddle.offsetLeft + paddle.offsetWidth &&
      ballY > paddle.offsetTop &&
      ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
    ) {
      dx *= -1;
    }

    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) {
      dx *= -1;
    }

    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) {
      dy *= -1;
    }
  }, 1);

  let paddleY = 0;
  let dPy = 10;

  document.addEventListener("keydown", (event) => {
    event.preventDefault(); //prevents the browser's default action of scrolling when the arrow keys are pressed
    if (event.keyCode === 38 && paddleY > 0) {
      //up arrow key
      paddleY += -1 * dPy;
    } else if (
      event.keyCode === 40 &&
      paddleY < table.offsetHeight - paddle.offsetHeight
    ) {
      //down arrow key
      paddleY += dPy;
    }
    paddle.style.top = `${paddleY}px`;
  });


  document.addEventListener("mousemove", (event) => {
        if(event.clientX > table.offsetLeft+ (table.offsetWidth/2)){
            return;
        }
        let mouseDistanceFromTop = event.clientY;
        let distanceOfTableFromTop = table.offsetTop;
        let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight / 2;
        paddleY = mousePointControl;
        if(paddleY<= 0 || paddleY> table.offsetHeight - paddle.offsetHeight){
            return;
        }

        paddle.style.top = `${paddleY}px`;

  })


});
