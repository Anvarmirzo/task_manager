const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const db = await mongoose.connect(process.env.MONGO_URI);
		if (db) console.log('Connected to MongoDB');
	} catch (error) {
		console.log(error.code, error.message);
	}
};

module.exports = connectDB;
