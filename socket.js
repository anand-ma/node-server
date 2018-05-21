let express = require('express');
let http = require('http');
let app = express();

let server = http.createServer(app);
let io = require('socket.io')(server);

io.on('connection', function(client){
  console.log('A client connected');
});

app.get('/', function(req, res){
    res
        .status(200)
        .send('this is my lovely socket program');
});


let port = 8181;
server.listen(port, function(){
    console.log('listening on port : ' + port);
});

