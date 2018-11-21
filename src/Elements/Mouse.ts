import Element from '../Element';

export default class Mouse extends Element {
  readonly size = 20;

  x = 0;
  y = 0;

  mouseX = -1;
  mouseY = -1;

  get MouseDiffX(): number { return this.x - this.mouseX; }
  get MouseDiffY(): number { return this.y - this.mouseY; }

  get MouseDelta(): number {
    return Math.abs(this.MouseDiffX) + Math.abs(this.MouseDiffY);
  }

  start(): void {
    this.canvas.Element.addEventListener('mousemove', ({ layerX, layerY }) => {
      this.mouseX = layerX;
      this.mouseY = layerY;
    });
  }

  clear(): void {
  }

  update() {

    this.clear();
    
    this.x = this.canvas.Width / 4;
    this.y = this.canvas.Height / 4;


    const ctx = this.canvas.CTX;

    ctx.beginPath();
    ctx.arc(this.mouseX, this.mouseY, this.size / 2, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'transparent';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    //ctx.beginPath();
    //ctx.fillStyle = "#FF0000";
    //ctx.moveTo(this.mouseX);
    //ctx.fill();
  }
}