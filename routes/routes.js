const url = require('url');
const { addGuest, listGuests } = require('../services/guest.service');

module.exports = (req, res, counter) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`Witaj na stronie. Odwiedziłeś ją ${counter} razy`);
  }

  else if (path === '/add') {
    addGuest(res);
  }

  else if (path === '/list') {
    listGuests(res);
  }

  else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
};
