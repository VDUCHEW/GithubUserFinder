var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

console.log("Server Connected! Listening at port 3000");

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
