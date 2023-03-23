const http = require('http');

function createServer() {
  const SERVER = http.createServer();
  return SERVER;
}

module.exports = createServer;