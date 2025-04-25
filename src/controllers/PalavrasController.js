const PalavrasService = require('../services/PalavrasService');

const PalavrasController = {
    listarPalavras: (req, res) => {
        
        const palavras = PalavrasService.listarPalavras();
        const aux = Math.floor(Math.random()*palavras.length);
        console.log('teste');
        console.log(palavras[aux]);
        console.log(palavras.length);
        res.json(palavras[aux]);
    }
};

module.exports = PalavrasController;