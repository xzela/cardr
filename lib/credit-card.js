var is = require('is_js');

function CreditCard() {
	'use strict';
	var publicAPI;

	function luhnCheck(number) {
		var b = false,
			m = '100';
		if (is.not.existy(number) || is.empty(number)) {
			return b;
		}
		var l = number.length;
		while(l--) {
			
		}
		return b;
	}

	publicAPI = {
		luhnCheck: luhnCheck
	};
	return publicAPI;
}

module.export = CreditCard;
