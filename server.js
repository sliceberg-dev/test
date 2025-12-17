const http = require('http');
const handleRoutes = require('./routes/routes');
const { loadCounter, saveCounter } = require('./services/counter.service');

let counter = loadCounter();

const server = http.createServer((req, res) => {
  counter++;
  handleRoutes(req, res, counter);
  saveCounter(counter);
});

server.listen(3000, () => {
  console.log('Server działa na porcie 3000');
});
