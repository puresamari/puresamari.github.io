import Element from '../Element';

import Blob from './Blob';
import Canvas from '../Canvas';

export default <{ new(canvas: Canvas): Element }[]>[
  Blob
];