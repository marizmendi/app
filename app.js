const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(req.headers["cf-connecting-ip"]);
}

const server = http.createServer(requestListener);
server.listen(80);
