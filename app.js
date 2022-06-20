const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connect');
const tasksRouter = require('./routes/tasks');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const api = '/api/v1';

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routers
app.use(`${api}/tasks`, tasksRouter);
app.use(notFound);
app.use(errorHandler);

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
