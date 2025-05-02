const fs = require('fs');
const path = require('path');

const caminhoBD = path.join(__dirname, '../../bd/pontuacoes.json');

function lerDados(){
    const dados = fs.readFileSync(caminhoBD, 'utf-8');
    return JSON.parse(dados);
}

function salvarDados(novosDados){
    fs.writeFileSync(caminhoBD, JSON.stringify(novosDados, null, 2));
}

const JogoService = {
    listarPontuacoes: () => {
        const dados = lerDados();
        return dados.pontuacoes || [];
    },

    salvarPontuacao: ({jogador, pontos}) => {
        const dados = lerDados();
        dados.pontuacoes = dados.pontuacoes || [];
        dados.pontuacoes.push({jogador, pontos});
        salvarDados(dados);
    }
};

module.exports = JogoService;