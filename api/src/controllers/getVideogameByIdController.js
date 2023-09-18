const { Videogame, Genre} = require ("../db");
const idVideogame = require("../handlers/getVideogameByIdHandler");
const axios = require("axios");

require("dotenv").config();
const { VG_URL, API_KEY } = process.env;

const getVideogameByIdController = async(idVideogame) => {
    if (idVideogame.includes("-")) {
        console.log("buscando en DB");
        const DBResponse = await Videogame.findByPk(idVideogame);
        if (DBResponse) {
            console.log(DBResponse.dataValues);
            return {
                
                ...DBResponse.dataValues,
                genres: DBResponse.genres.map((genre) => genre.name),
            };
        }
    }
    else {
        console.log("buscando en API");
        const url = `${VG_URL}/${idVideogame}?key=${API_KEY}`;
        const ApiResponse = await axios.get(url);
        console.log(ApiResponse.data);
        return {
            ...ApiResponse.data,
            genres: ApiResponse.data.genres.map((genre) => genre.name),
        }

    }
}

module.exports = getVideogameByIdController;