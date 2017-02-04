class App  {
  constructor(canvas, canvasContext) {
    this.canvas = canvas;
    this.canvasContext = canvasContext;
		this.hello  = 'hello';
    
    this.initCanvas();
    this.drawBall();
  }

  getCanvas() {
    return this.canvas;
  }

  initCanvas() {
    const { canvas, canvasContext } = this;
    canvasContext.filStyle = 'black';
    canvasContext.fillRect( 0, 0, canvas.width, canvas.height );
  }

  drawBall() {
    const { canvasContext } = this;
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc( 100, 100, 10, 0, Math.PI*2, true );
    canvasContext.fill();
  }
}

export default App;

var canvas = null;
var canvasContext = null;
var app = null;


window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  const app = new App( canvas, canvasContext );
}

