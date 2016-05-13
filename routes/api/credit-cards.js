'use strict';
var is = require('is_js'),
	CreditCard = require('../../lib/credit-card');
console.log(CreditCard);
exports = module.exports = function(server) {

	function check(request, response) {
		var cc = request.params.cc;
		if (is.not.existy(cc) || is.empty(cc)) {
			response.status(400);
			return response.json({error: 'missing or invalid cc parameter'});
		}
		return response.json({valid: CreditCard.validate(cc)});
	}

	server.get('/api/check/:cc', check);
};
