const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  // req.url 에 요청된 url 이 저장됨
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found')
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// terminal 1
// $ node index.js

// terminal 2
// $ curl -X GET 'localhost:3000'
// Hello, World!

// $ curl -X GET 'localhost:3000' -v

// Note: Unnecessary use of -X or --request, GET is already inferred.
// * Host localhost:3000 was resolved.
// * IPv6: ::1
// * IPv4: 127.0.0.1
// *   Trying [::1]:3000...
// *   Trying 127.0.0.1:3000...
// * Connected to localhost (127.0.0.1) port 3000
// > GET /users HTTP/1.1
// > Host: localhost:3000
// > User-Agent: curl/8.7.1
// > Accept: */*
// >
// < HTTP/1.1 404 Not Found
// < Date: Wed, 24 Jul 2024 04:20:02 GMT
// < Connection: keep-alive
// < Keep-Alive: timeout=5
// < Content-Length: 9
// <
// Not Found* Request completely sent off
// * Connection #0 to host localhost left intact