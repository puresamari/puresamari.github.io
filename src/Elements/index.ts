import Element from '../Element';
import Canvas from '../Canvas';

import Blob from './Blob';
import Pulse from './Pulse';
import Mouse from './Mouse';

export default <{ new(canvas: Canvas): Element }[]>[
  Pulse,
  Blob,
  Mouse
];