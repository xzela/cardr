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

	require('./routes')(server);

	server.get('/', function (req, res) {
		console.log('got request');
		return res.send({});
	});

	server.listen(PORT, function () {
		console.log('%s listening at %s', server.name, server.url);
	});
})();
