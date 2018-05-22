const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let server = http.createServer(app);
let io = require('socket.io')(server);

let data = "";

io.on('connection', function (client) {
  console.log('A client connected');
  let counter = 0;
  setInterval(() => {
    if(data) {
      client.emit('message', data);
      data = "";
    }    
  },0);


});



app.get('/', function (req, res) {
  res
    .status(200)
    .send('this is my lovely socket program');
});

app.post('/message', function (req, res) {
  // console.log(req.headers);
  // console.log(req.body);
  data = req.body.message;
  console.log(data);
  res
    .status(200)
    .send({'message': 'message received'});
});

let port = 8181;
server.listen(port, function () {
  console.log('listening on port : ' + port);
});