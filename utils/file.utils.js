const fs = require('fs');

function nonexistentFunc() {
  fs.readFile('error.log', 'utf8', err => {
    if (err) {
      fs.appendFileSync('error.log', 'error\n');
    }
  });
}

module.exports = { nonexistentFunc };
