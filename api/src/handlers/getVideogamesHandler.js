const allDataGames = require("../controllers/getVideogamesController");

const getAllVideogames = async (req, res) => {
  try {
    const videogames = await allDataGames();
    res.status(200).json(videogames);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getAllVideogames;
