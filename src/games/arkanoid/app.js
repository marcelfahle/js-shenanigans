class App  {
  constructor(canvas, canvasContext) {
    this.canvas = canvas;
    this.canvasContext = canvasContext;

    this.famesPerSecond = 50;
    this.ballX = 75;
    this.ballY = 100;
    this.ballSpeedX = 5;
    this.ballSpeedY = 3;

    this.paddleWidth = 100;
    this.paddleThickness = 10;
    this.paddleDistFromBottom = 60;
    this.paddleX = 400;


    setInterval( this.drawAll.bind(this),  1000/ this.famesPerSecond );

    canvas.addEventListener( 'mousemove', this.updateMousePosition.bind( this ) );
  }

  getCanvas() {
    return this.canvas;
  }

  updateMousePosition( e ) {
    const rect = this.canvas.getBoundingClientRect();
    const root = document.documentElement;

    const mouseX = e.clientX - rect.left - root.scrollLeft;
    //const mouseY = e.clientY - rect.top - root.scrollTop;

    this.paddleX = mouseX - this.paddleWidth / 2;
  }


  drawAll() {
    this.drawCanvas();
    this.moveBall();
    this.drawBall();
    this.colorRect( 
      this.paddleX, 
      this.canvas.height - ( this.paddleDistFromBottom ),
      this.paddleWidth,
      this.paddleThickness,
      'white'
    );
  }

  drawCanvas() {
    this.colorRect( 0,0, this.canvas.width,this.canvas.height, 'black' );
  }

  resetBall() {
    this.ballX = this.canvas.width / 2;
    this.ballY = this.canvas.height / 2;
  }

  moveBall() {
    let { canvasContext, canvas  } = this;
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;

    if ( this.ballX > canvas.width ) this.ballSpeedX *= -1; 
    if ( this.ballX < 0 ) this.ballSpeedX *= -1; 

    if ( this.ballY > canvas.height ) this.resetBall();
    if ( this.ballY < 0 ) this.ballSpeedY *= -1; 

    const paddleTopEdge = this.canvas.height - this.paddleDistFromBottom;
    const paddleBottomEdge = paddleTopEdge + this.paddleThickness;

    const paddleLeftEdge = this.paddleX;
    const paddleRightEdge = paddleLeftEdge + this.paddleWidth;

    if( this.ballY > paddleTopEdge &&
        this.ballY < paddleBottomEdge &&
        this.ballX > paddleLeftEdge &&
        this.ballX < paddleRightEdge) {
          this.ballSpeedY *= -1;        
        }
  }

  drawBall() {
    this.colorCircle(this.ballX,this.ballY, 10, 'white');
  }

  colorRect( x, y, width, height, fillColor ) {
    let { canvas, canvasContext } = this;
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect( x, y, width, height );
  }

  colorCircle( centerX,centerY, radius, fillColor) {
    let { canvasContext, canvas  } = this;
    
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc( centerX,centerY, radius, 0,Math.PI*2, true );
    canvasContext.fill();
  }

}

export default App;


window.onload = function() {
  const canvas = document.getElementById('gameCanvas');
  const canvasContext = canvas.getContext('2d');

  const app = new App( canvas, canvasContext );
}

