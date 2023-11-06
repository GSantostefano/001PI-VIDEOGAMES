// Importa las dependencias necesarias.
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');  // Middleware de registro de solicitudes HTTP.
const routes = require('./routes/index.js'); // Importa el enrutador principal.
require('./db.js'); // Importa la configuración de la base de datos.

// Crea una instancia de Express.
const server = express();

// Configura el nombre de la aplicación como 'API'.
server.name = 'API';

// Configura middlewares para procesar solicitudes entrantes.
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());

// Middleware 'morgan' para registrar las solicitudes HTTP en el modo 'dev' (desarrollo).
server.use(morgan('dev'));

// Configura las cabeceras CORS para permitir solicitudes desde un origen específico.
server.use((req, res, next) => {
<<<<<<< Updated upstream
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
=======
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000'); // Actualiza con tu dominio.
>>>>>>> Stashed changes
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Asocia el enrutador principal ('routes') a la ruta base '/' de tu aplicación.
server.use('/', routes);

// Middleware para manejar errores. Captura los errores y envía una respuesta de error.
server.use((err, req, res, next) => {
  const status = err.status || 500; // Establece el código de estado HTTP.
  const message = err.message || err; // Establece el mensaje de error.
  console.error(err); // Registra el error en la consola.
  res.status(status).send(message); // Envía una respuesta de error al cliente.
});

// Exporta la instancia de Express configurada como 'server'.
module.exports = server;

