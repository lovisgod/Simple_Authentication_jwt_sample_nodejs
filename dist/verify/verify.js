'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var verify = function verify(req, res, next) {
	var bearerHeader = req.headers['authorization'];
	//check if bearer is undifined 
	if (typeof bearerHeader !== 'undefined') {
		//spit at the space
		//what the split does it turn a string into an array
		var bearer = bearerHeader.split(' ');
		//get token from array
		var bearerToken = bearer[1];

		//set token
		req.token = bearerToken;
		next();
	}
	//forbidden
	res.json({
		message: 'forbidden'
	});
};

exports.default = verify;