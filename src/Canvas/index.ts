export default class Canvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public get Element(): HTMLCanvasElement { return this.canvas; }
  public get CTX(): CanvasRenderingContext2D { return this.context; }
  public get Width(): number { return this.width; }
  public get Height(): number { return this.height; }

  constructor(
    private parent = document.body,
    private width = 0,
    private height = 0
  ) {
    this.canvas = document.createElement('canvas');
    if (!width || !height) {
      const bounds = parent.getBoundingClientRect();
      this.width = width || bounds.width;
      this.height = height || bounds.height;
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    //this.canvas.className = root;
    this.parent.appendChild(this.canvas);
    this.context = <CanvasRenderingContext2D>this.canvas.getContext('2d');
    this.clear();
  }

  clear(): void {
    this.context.clearRect(0, 0, this.width, this.height);
    requestAnimationFrame(() => this.clear());
  }
}