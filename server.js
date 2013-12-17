var http = require('http'),
	host = '127.0.0.1',
	port = 3000;

var start = function() {
	function onRequest(request, response) {
		console.log('request received');
		response.end('hello cardr');
	}
	var server = http.createServer(onRequest);
	server.listen(port, host, function() {
		console.log('Server listening on: ' + host + ':' + port);
	});
}

exports.start = start;
