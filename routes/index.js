'use strict';
var is = require('is_js');

exports = module.exports = function (server) {

	require('./api/credit-cards')(server);

};
