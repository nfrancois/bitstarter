var fs = require('fs'), express = require('express');

var app = express.createServer(express.logger());
var utf8 = "utf8"


app.get('/', function(request, response) {
  fs.readFile('index.html', utf8, function(err, data){
    if(err) 
      throw err;
    buffer = new Buffer(data);
  	response.send(buffer.toString(utf8));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});