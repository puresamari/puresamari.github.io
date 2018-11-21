import Element from '../Element';

export default class Blob extends Element {

  x = 0;
  y = 0;
  w = 0;
  h = 0;

  mouseX = -1;
  mouseY = -1;

  start(): void {
    this.canvas.Element.addEventListener('mousemove', ({ layerX, layerY }) => {
      this.mouseX = layerX - this.x;
      this.mouseY = layerY - this.y;
    });
  }

  update() {
    
    this.x = this.canvas.Width / 4;
    this.y = this.canvas.Height / 4;

    this.w = this.canvas.Width / 2;
    this.h = this.canvas.Height / 2;

    const ctx = this.canvas.CTX;

    const mInFrame = (
      (this.mouseX > 0 && this.mouseX < this.w) &&
      (this.mouseY > 0 && this.mouseY < this.h)
    );

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    if (mInFrame) {
      ctx.lineTo(this.x + this.mouseX, this.y + this.mouseY);
    }
    ctx.lineTo(this.x, this.y + this.h);
    ctx.lineTo(this.x + this.w, this.y + this.h);
    if (mInFrame) {
      ctx.lineTo(this.x + this.mouseX, this.y + this.mouseY);
    }
    ctx.lineTo(this.x + this.w, this.y);
    ctx.lineTo(this.x, this.y);
    ctx.fill();
  }
}