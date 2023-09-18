const { Router } = require('express');

const getAllVideogames = require('../handlers/getVideogamesHandler');
const getVideogameByIdHandler= require('../handlers/getVideogameByIdHandler');
//const getVideogameByName = require('../handlers/getVideogameByNameHandler');
//const postVideogame = require('../handlers/postVideogameHandler');

const gamesRoutes = Router();

//Rutas
gamesRoutes.get('/', getAllVideogames);
gamesRoutes.get('/id/:idVideogame', getVideogameByIdHandler);
//gamesRoutes.get('/search/', getVideogameDetail);
//gamesRoutes.get('/create', postVideogame);

module.exports = gamesRoutes;