import Canvas from './Canvas';
import Element from './Element';
import elements from './Elements';

const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'canvas-wrapper');

document.body.appendChild(wrapper);

requestAnimationFrame(() => {
  const canvas = new Canvas(wrapper);
  elements.forEach(v => new v(canvas));
});
