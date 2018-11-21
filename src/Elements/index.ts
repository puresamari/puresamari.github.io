import Element from '../Element';
import Canvas from '../Canvas';

import Blob from './Blob';
import Pulse from './Pulse';

export default <{ new(canvas: Canvas): Element }[]>[
  Pulse,
  Blob
];