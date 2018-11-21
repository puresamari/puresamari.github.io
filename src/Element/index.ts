import Canvas from '../Canvas';

export default abstract class Element {
  constructor(protected canvas: Canvas) {
    requestAnimationFrame(() => {
      this.start();
      this.updateEngine();
    });
  }
  private updateEngine(): void {
    requestAnimationFrame(() => {
      this.update();
      this.updateEngine();
    })
  }
  start(): void { }
  update(): void {}
}