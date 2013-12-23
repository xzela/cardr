var http = require('http'),
	https = require('https'),
	ssl = require('./ssl'),
	fs = require('fs'),
	url = require('url'),
	path = require('path'),
	host = '127.0.0.1',
	port = 3000;

var contentTypes = {
	'.html': 'text/html',
	'.css': "text/css",
	'.js': 'application/javascript',
	'.png': 'image/png',
	'.jpg': 'image/jpeg'
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
			fs.exists(filename, function(exists) {
				if (!exists) {
					response.writeHead(404, {'Content-type': 'text/plain'});
					response.write('resource does not exist: ' + uri);
					response.end();
				} else {
					// if root directory, append index.html
					if (fs.statSync(filename).isDirectory()) {
						filename += 'index.html';
					}
					var contentType = contentTypes[path.extname(filename)];
					fs.readFile(filename, function(err, file) {
						if (err) {
							response.writeHead(404, {'Content-type:': 'text/plain'});
							response.write(err + "\n");
							response.end();
						} else {
							console.log('MIME TYPE for: ', filename , contentType);
							response.write(file);
							response.end();
						}
					});
				}
			});
		}
	};
	if (process.env.NODE_ENV === 'production') {
		var server = https.createServer(ssl, onRequest);
	} else {
		var server = http.createServer(onRequest);
	}
	server.listen(port, host, function() {
		console.log('Server listening on: ' + host + ':' + port);
	});
};

exports.start = start;
