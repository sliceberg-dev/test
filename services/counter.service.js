const fs = require('fs');

function loadCounter() {
  try {
    return parseInt(fs.readFileSync('plik.txt', 'utf8')) || 0;
  } catch {
    return 0;
  }
}

function saveCounter(counter) {
  fs.writeFileSync('plik.txt', counter.toString(), 'utf8');
}

module.exports = { loadCounter, saveCounter };
