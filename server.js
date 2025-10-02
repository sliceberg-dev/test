let http = require('http');
http.createServer(function (req, res) {
  var x = 0;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Witaj na stronie. odwiedziles ja juz X razy');

})
.listen(3000);