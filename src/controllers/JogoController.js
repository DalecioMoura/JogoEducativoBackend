const JogoService = require('../services/JogoService');


const JogoController = {
    listarPontuacoes: (req, res) => {
        const pontuacoes = JogoService.listarPontuacoes();
        res.json(pontuacoes);
    },

    salvarPontuacao: (req, res) => {
        const {jogador, pontos} = req.body;

        if(!jogador || pontos == null){
            return res.status(400).json({erro: 'Jogador e pontos são obrigatórios.'});
        }

        JogoService.salvarPontuacao({jogador, pontos});

        res.json({mensagem: 'Pontuação salva com sucesso!'});
    }
};

module.exports = JogoController;