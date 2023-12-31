//se encarga de:
//recibir la request
//unificar datos
//devolver la respuesta
//invoca al controller
//el handler nunca interactua con fuentes externas!!


const allGenres = require("../controllers/getGenresController");

const getGenres = async (req, res) => {
  try {
    const genres = await allGenres() 
    res.status(200).json(genres)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = getGenres;