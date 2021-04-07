// require
// Module path nativo do node

const path = require('path');

const filename = path.basename(__filename);
const sep = path.sep;
const absolute = path.resolve(__dirname, __filename);
const dir = path.join('/content/', 'folder', 'test.txt');

console.log(dir);
