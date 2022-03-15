const notFound = (req, res, next) => {
	const error = `Route ${req.originalUrl} not found`;
	res.status(404).send(error);
};

module.exports = notFound;