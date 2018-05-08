	var tcp = require('net');
	
	var server = tcp.createServer(function(socket) {
		socket.write("Hello\n");
		socket.write("world\n");
		socket.on("data", function(data) {
			socket.write(data);
		});
	});

	server.listen(8000);
