const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemon=require('./pokemons.js');

const types = require('./typess.js');

const router= Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemon)
router.use('/types',types)

module.exports = router;
