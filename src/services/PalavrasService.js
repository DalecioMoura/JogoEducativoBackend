const fs = require('fs');
const path = require('path');

const caminhoBD = path.join(__dirname, '../../bd/palavrasAtualizadas.json');

function lerPalavras(){
    const palavras = fs.readFileSync(caminhoBD, 'utf-8');
    const palavra = JSON.parse(palavras);
    console.log(JSON.stringify(palavra.palavras[0]));
    return (palavra);//SON.parse(palavras);
}

const palavrasService = {
    listarPalavras: () => {
        const palavras = lerPalavras();
        return palavras.palavras || [];
    }
};

module.exports = palavrasService;