var express = require('express');
var server = express();
server.use(express.static(__dirname));

var port = process.env.PORT || 8081;
server.listen(port);
console.log('Use port ' + port + ' to connect to this server : http://localhost:8081/');

exports = module.exports = server;