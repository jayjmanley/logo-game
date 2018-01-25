'use strict';

const http = require('http');

const index = require('./skill/index.js');

function createServer(skill) {
  return http.createServer((req, res) => {
    if (req.method !== 'POST') {
      res.writeHead(404);
      return res.end();
    }

    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const data = JSON.parse(Buffer.concat(chunks).toString());
      // console.log('data', JSON.stringify(data, null, 2));
      const callback = function callback(err, msg) {
        // console.log('ALEXA OUTPUT', JSON.stringify(msg, null, 2));
        res.write(JSON.stringify(msg));
        res.end();
      };

      skill.handler(data, {
        succeed: function succeed(msg) {
          callback(null, msg);
        },
        fail: function done(err, msg) {
          callback(err, msg);
        },
      }, callback);
    });

    return res.writeHead(200, { 'Content-Type': 'application/json' });
  });
}

const port = 3000;

createServer(index).listen(port, () => {
  console.log(`Listening on port ${port}`);
});
