//import * as style from './canvas.css';

export default class Canvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public get CTX(): CanvasRenderingContext2D { return this.context; }
  public get Width(): number { return this.width; }
  public get Height(): number { return this.height; }

  constructor(
    private width = window.innerWidth,
    private height = window.innerHeight,
    private parent = document.body
  ) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    //this.canvas.className = style.root;
    this.parent.appendChild(this.canvas);
    this.context = <CanvasRenderingContext2D>this.canvas.getContext('2D');
  }
}