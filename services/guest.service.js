const fs = require('fs');

function addGuest(res) {
  const now = new Date();
  const entry = `Jan ${now.getHours()}:${now.getMinutes()} ${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}\n`;

  fs.appendFile('guests.txt', entry, err => {
    if (err) {
      res.end('Błąd zapisu');
    } else {
      res.end('Dodano Jana');
    }
  });
}

function listGuests(res) {
  fs.readFile('guests.txt', 'utf8', (err, data) => {
    if (err) {
      res.end('Brak danych');
    } else {
      res.end(data);
    }
  });
}

module.exports = { addGuest, listGuests };
