var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path'),
	host = '127.0.0.1',
	port = 3000;

var contentTypes = {
	'.html': 'text/html',
	'.css': "text/css",
	'.js': 'application/javascript',
	'.png': 'image/png'
};

var fourOhfour = function() {

};

var start = function() {
	function onRequest(request, response) {
		if (request.method === "POST") {
			// kill all post request.
			response.writeHead(500, {'Content-type': 'text/plain'});
			response.write('no posts allowed, bitch');
			response.end();
		} else {
			var uri = url.parse(request.url).pathname,
				filename = path.join(__dirname, 'views', uri);
			console.log('request received for: ' + uri);
			console.log('looking for local resource: ' + filename);
			fs.exists(filename, function(exists) {
				if (!exists) {
					console.log('resource does not exist: ' + filename);
					response.writeHead(404, {'Content-type': 'text/plain'});
					response.write('resource does not exist: ' + filename);
					response.end();
				} else {
					// if root directory, append index.html
					if (fs.statSync(filename).isDirectory()) {
						filename += 'index.html';
					}
					fs.readFile(filename, function(err, file) {
						console.log('reading file: ' + filename);
						if (err) {
							response.writeHead(404, {'Content-type:': 'text/plain'});
							response.write(err + "\n");
							response.end();
						} else {
							var contentType = contentTypes[path.extname(filename)];
							console.log(contentType);
							response.writeHead(200, {
								'Content-Type:': contentType,
								'Content-Length': file.length
							});
							// response.write(file, "binary");
							response.write(file, "binary");
							response.end();
						}
					});
				}
			});
		}
	}
	var server = http.createServer(onRequest);
	server.listen(port, host, function() {
		console.log('Server listening on: ' + host + ':' + port);
	});
}

exports.start = start;
