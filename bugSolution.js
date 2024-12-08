const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.on('error', err => {
  console.error('Server Error:', err);
  // Handle the error appropriately (e.g., log to a file, retry, etc.)
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});