(function() {
	'use strict';

	var restify = require('restify'),
		PORT = 3001;

	var server = restify.createServer();
	server.name = 'cardr';

	server.pre(function (req, res, next) {
		console.log(req.method, req.url);
		return next();
	});

	// all routes here
	require('./routes')(server);

	// serve up the static main page
	server.get(/^\/?.*/, restify.serveStatic({
		directory: './views',
		default: 'index.html'
	}));

	server.listen(PORT, function () {
		console.log('%s listening at %s', server.name, server.url);
	});
})();
