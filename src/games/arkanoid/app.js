class App  {
  constructor(canvas, canvasContext) {
    this.canvas = canvas;
    this.canvasContext = canvasContext;

    this.famesPerSecond = 25;
    this.ballX = 75;
    this.ballY = 100;
    this.ballSpeedX = 5;
    this.ballSpeedY = 3;

    this.drawCanvas();
    
    setInterval( this.drawAll.bind(this), 1000 / this.framesPerSecond );
    this.drawAll();
  }

  getCanvas() {
    return this.canvas;
  }


  drawAll() {
    this.drawCanvas();
    this.moveBall();
    this.drawBall();
  }

  drawCanvas() {
    this.colorRect( 0,0, this.canvas.width,this.canvas.height, 'black' );
  }

  moveBall() {
    let { canvasContext, canvas  } = this;
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;

    if ( this.ballX > canvas.width ) this.ballSpeedX *= -1; 
    if ( this.ballX < 0 ) this.ballSpeedX *= -1; 

    if ( this.ballY > canvas.height ) this.ballSpeedY *= -1; 
    if ( this.ballY < 0 ) this.ballSpeedY *= -1; 
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

