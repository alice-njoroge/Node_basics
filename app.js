var newMod = require("./new");

newMod.log("message here");
newMod.timer();
console.log(newMod.ninjas(["Alice", "Humphrey"]));

/**
 * creating a server
 */
var http = require("http");

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "content-Type": "text/plain" });
  res.end("hey there");
});

server.listen(3000, "127.0.0.1");
console.log("this is the server");
