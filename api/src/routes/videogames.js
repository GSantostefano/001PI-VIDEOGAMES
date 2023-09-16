const { Router } = require('express');

const getAllVideogames = require('../handlers/getVideogamesHandler');
const getVideogameById = require('../handlers/getVideogameByIdHandler');
const getVideogameByName = require('../handlers/getVideogameByNameHandler');
const postVideogame = require('../handlers/postVideogameHandler');

const gamesRoutes = Router();

//Rutas
gamesRoutes.get('/', getAllVideogames);
gamesRoutes.get('/id/:idVideogame', getVideogameById);
gamesRoutes.get('/search/', getVideogameByName);
gamesRoutes.get('/create', postVideogame);

module.exports = gamesRoutes;