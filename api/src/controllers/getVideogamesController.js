// Importa el modelo Videogame desde el archivo "../db".
const { Videogame } = require("../db");

// Importa la librería axios para realizar solicitudes HTTP.
const axios = require("axios");

// Importa variables de entorno desde el archivo .env.
require("dotenv").config();

// Define la función asincrónica getAllVideogames.
const allDataGames = async () => {
    try {
        // Inicializa un array vacío para almacenar los videojuegos.
        let allVideogamesArray = [];

        // Imprime en la consola un mensaje para mostrar la URL de la API que se va a consultar.
        console.log("fetchingALL-controller", process.env.VG_URL);

        // Inicializa un contador de páginas en 1.
        let pageNum = 1;

        // Utiliza un bucle while para obtener videojuegos hasta que haya 100 en total.
        while (allVideogamesArray.length < 100) {
            // Construye la URL de la API con el número de página actual.
            let page = `&page=${pageNum}`;
            const url = `${process.env.VG_URL}?key=${process.env.API_KEY}${page}`;

            // Realiza una solicitud HTTP GET a la URL de la API.
            const response = await axios.get(url);
            console.log(response.data);

            // Extrae los resultados y la URL de la siguiente página de la respuesta.
            const { results, next } = response.data;

            // Concatena los resultados de la página actual al array de videojuegos.
            allVideogamesArray = allVideogamesArray.concat(results);

            // Si no hay una URL de siguiente página, se rompe el bucle.
            if (!next) {
                break;
            }

            // Incrementa el número de página.
            pageNum++;
        }

        // Obtiene todos los videojuegos de la base de datos local utilizando Sequelize.
        const DBVideogames = await Videogame.findAll();

        // Combina los videojuegos de la API y de la base de datos en un solo array.
        const allVideogames = DBVideogames.concat(allVideogamesArray);



        console.log("Cantidad de objetos en allVideogamesArray:", allVideogamesArray.length);
        console.log("Cantidad de paginas:", pageNum); 
        // Retorna el array que contiene todos los videojuegos.
        return allVideogames;
    } catch (error) {
        // En caso de error, imprime un mensaje de error en la consola.
        console.error({ error: error.message });
    }
};

// Exporta la función getAllVideogames para su uso en otros archivos.
module.exports = allDataGames;