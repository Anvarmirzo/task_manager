class customAPIError extends Error {
	constructor(statusCode, message) {
		super(message);
		this.statusCode = statusCode;
	}
}

const createCustomError = (statusCode, message) => {
	return new customAPIError(statusCode, message);
};
module.exports = {
	customAPIError,
	createCustomError
};