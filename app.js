const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connect');
const tasksRouter = require('./routes/tasks');

const app = express();
const api = '/api/v1';

// middleware
app.use(express.json());

// routers
app.use(`${api}/tasks`, tasksRouter);

const port = process.env.PORT || 3000;

(async () => {
	try {
		await connectDB();

		app.listen(
			port,
			console.log(`Server is listening on port http://localhost:${port}`)
		);
	} catch (e) {
		console.log(e);
	}
})();
