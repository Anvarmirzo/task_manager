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

app.all('*', function (req, res, next) {
  // Устанавливаем заголовок запроса, чтобы разрешить междоменный
  res.header('Access-Control-Allow-Origin', '*');
  // Устанавливаем все поля заголовка, поддерживаемые сервером
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild, sessionToken');
  // Устанавливаем методы для всех междоменных запросов, поддерживаемых сервером
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method.toLowerCase() == 'options') {
      res.send(200);  // Позволяем опциям запрашивать быстрое завершение
  } else {
      next();
  }
});

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
