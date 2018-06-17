const express = require("express");
var http = require('http');
const app = express();
app.set("view engine", 'html');
app.set("views", "./views");
http.createServer(function (req, res) {
  res.sendFile("views/index.html", {"root": __dirname})
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome Node.js');
}).listen(3000, "35.186.156.219");
console.log('Server running at http://127.0.0.1:3001/');