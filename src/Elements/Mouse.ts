import Element from '../Element';

function radians(degrees: number): number {
  return degrees * Math.PI / 180;
};

function move(point: number[], angle: number, unit: number): number[] {
  var x = point[0];
  var y = point[1];
  var rad = radians(angle % 360);

  x += unit * Math.sin(rad);
  y += unit * Math.cos(rad);

  return [x, y];
}


export default class Mouse extends Element {
  readonly size = 20;

  x = 0;
  y = 0;

  mouseX = -1;
  mouseY = -1;

  mouse = false;

  get MouseDiffX(): number { return this.x - this.mouseX; }
  get MouseDiffY(): number { return this.y - this.mouseY; }

  get MouseDelta(): number {
    return Math.abs(this.MouseDiffX) + Math.abs(this.MouseDiffY);
  }

  get DirectionInRadians(): number {
    return Math.atan2(this.y - this.mouseY, this.x - this.mouseX);
  }

  get Direction(): number {
    return this.DirectionInRadians * 180 / Math.PI;
  }

  start(): void {
    this.canvas.Element.addEventListener('mousemove', ({ layerX, layerY }) => {
      this.mouse = true;
      this.mouseX = layerX;
      this.mouseY = layerY;
    });
    this.canvas.Element.addEventListener('mouseleave', () => {
      this.mouse = false;
    });
  }

  drawCursor(): void {
    const ctx = this.canvas.CTX;

    ctx.beginPath();
    ctx.arc(this.mouseX, this.mouseY, this.size / 2, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'transparent';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
  }

  update() {

    if (!this.mouse) { return; }

    this.x = this.canvas.Width / 2;
    this.y = this.canvas.Height / 2;

    const ctx = this.canvas.CTX;

    if (this.MouseDelta > 10) {
      this.drawCursor();
    }

    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    //ctx.arc()
    ctx.arc(this.x, this.y, this.size / 2, (this.Direction - 90) * (Math.PI / 180), (this.Direction + 90) * (Math.PI / 180), true);
    const trnsl = move([this.x, this.y], this.Direction - 180, this.size);

    ctx.arc(trnsl[0], trnsl[1], this.size, (this.Direction + 90) * (Math.PI / 180), (this.Direction - 90) * (Math.PI / 180), true);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
  }
}