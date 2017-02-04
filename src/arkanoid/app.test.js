import App from './app';
import Canvas from 'canvas';

describe('App', () => {
  it('App is instantiated and has a canvas element', () => {
    const canvas = new Canvas(800, 600);
    const canvasContext = canvas.getContext('2d');
    const app = new App( canvas, canvasContext );
    expect(app.getCanvas()).toBeTruthy();
  });
});




