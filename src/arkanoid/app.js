export default class App  {
  constructor(canvas, canvasContext) {
    this.canvas = canvas;
    this.canvasContext = canvasContext;
    
    this.initCanvas();
  }

  getCanvas() {
    return this.canvas;
  }

  initCanvas() {
    const { canvas, canvasContext } = this;
    canvasContext.filStyle = 'black';
    canvasContext.fillRect( 0, 0, canvas.width, canvas.height );
  }
}

var canvas = null;
var canvasContext = null;
var app = null;

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  const app = new App( canvas, canvasContext );
}

