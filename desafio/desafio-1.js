const getFlag = require('./flag');

console.log(`Oi ${process.argv[getFlag('--name')]}, ${process.argv[getFlag('--getting')]}`);
