var is = require('is_js');

exports = module.exports = function (server) {
	'use strict';

	server.get('/api/check/:cc', function (req, res) {
		var cc = req.params.cc;
		if (is.not.existy(cc) || is.empty(cc)) {
			res.status(400);
			return res.json({error: 'missing cc parameter'});
		}
		return res.send(cc);
	});
};
