var is = require('is_js');

function CreditCard() {
	'use strict';
	var publicAPI;

	publicAPI = {
		validate: validate
	};

	return publicAPI;
}

function validate(number) {
	'use strict';

	var cc = number.toString();
	var m = 0;
	var checkDigit = cc.charAt(cc.length-1);
	cc = cc.slice(0, -1);
	var l = cc.length;
	var aSum = 0;
	while(l--) {
		var n = cc[l];

		if (m <= 0) {
			n = (n * 2).toString();
			m = 1;
		} else {
			m = 0;
		}

		if (n > 9) {
			var sum = 0;
			n.split('').forEach(function(nn){
				sum += Number(nn);
			});
			n = sum;
		}

		aSum += Number(n);
	}

	return checkDigit == (aSum * 9) % 10;
}
exports = module.exports = {
	validate: validate
};
