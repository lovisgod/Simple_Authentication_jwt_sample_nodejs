const verify = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
	//check if bearer is undifined 
	if(typeof bearerHeader !== 'undefined') {
		//spit at the space
		//what the split does it turn a string into an array
		const bearer = bearerHeader.split(' ');
		//get token from array
		const bearerToken = bearer[1];

		//set token
		req.token = bearerToken;
		next();
	}
		//forbidden
		res.json({
			message: 'forbidden'
		});
}

export default verify;