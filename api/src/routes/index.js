//este archivo:
//configuro funcionalidad express



const { Router } = require('express');//configuro enrutador que va a venir de express
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();// mi main router

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const videogames = require("./videogames");
router.use("/",videogames);

module.exports = router;
