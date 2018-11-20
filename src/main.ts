import Canvas from './Canvas/index.ts';

const canvas = new Canvas();

canvas.CTX.fillRect(
  canvas.Width / 4,
  canvas.Height / 4,
  canvas.Width / 2,
  canvas.Height / 2
);