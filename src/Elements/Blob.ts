import Element from '../Element';

export default class Blob extends Element {

  x = 0;
  y = 0;
  w = 0;
  h = 0;

  private get Breathe(): number {
    return Math.pow(Math.abs((new Date()).getMilliseconds() / 1000 * 2 - 1), 3);
  }

  clear(): void {
    this.canvas.CTX.clearRect(
      Math.floor(this.x),
      Math.floor(this.y),
      Math.ceil(this.w),
      Math.ceil(this.h)
    );
  }
  update() {

    this.clear();
    
    this.x = this.canvas.Width / 4 - this.canvas.Width * 0.1 * this.Breathe;
    this.y = this.canvas.Height / 4 - this.canvas.Width * 0.1 * this.Breathe;

    this.w = this.canvas.Width / 2 + this.canvas.Width * 0.2 * this.Breathe;
    this.h = this.canvas.Height / 2 + this.canvas.Width * 0.2 * this.Breathe;

    this.canvas.CTX.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}