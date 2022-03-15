const {customAPIError} = require('../errors/customError');
const errorHandler = (err, req, res, next) => {
	if (err instanceof customAPIError) return res.status(err.statusCode).send({message: err.message});

	return res.status(500).json({error: err});
};

module.exports = errorHandler;