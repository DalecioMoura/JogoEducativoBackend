const express = require('express');
const router = express.Router();
const JogoController = require('../controllers/JogoController');
const PalavrasController = require('../controllers/PalavrasController');

router.get('/pontuacoes', JogoController.listarPontuacoes);
router.post('/pontuacoes', JogoController.salvarPontuacao);

router.get('/palavras', PalavrasController.listarPalavras);

module.exports = router;