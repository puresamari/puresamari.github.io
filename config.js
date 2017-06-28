const path = require('path');

const root = path.resolve(__dirname, '');
const dist = path.resolve(root, 'dist');
const src = path.resolve(root, 'src');

module.exports = {
  root, dist, src
}
