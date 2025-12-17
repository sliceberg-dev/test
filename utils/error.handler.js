const fs = require('fs');
const process = require('process');

process.on('uncaughtException', err => {
  fs.appendFileSync('error.log', err.toString() + '\n');
});

process.on('unhandledRejection', reason => {
  console.error('Unhandled rejection:', reason);
});
