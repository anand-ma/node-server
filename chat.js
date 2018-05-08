	var tcp = require('net');
	var sockets = [];
	
	var server = tcp.createServer(function(socket) {
		socket.write("Lets Chat\n");
		sockets.push(socket);
		socket.on("data", function(data) {

			for(i=0; i<sockets.length; i++){
				if(sockets[i] == socket) continue;
				data = "\t" + data;
				sockets[i].write(data);
			}
		});
	
		socket.on("close", function() {
			var ind = sockets.indexOf(socket);
			sockets.splice(ind,1);
		});	

	
	});

	server.listen(8000);
