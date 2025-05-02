const express = require('express');
const cors = require('cors');
const path = require('path');


const routes = require('./routes/routes');

const app = express();


app.use(cors());
app.use(express.json()); // permite ler o JSON no corpo das requisições

app.use(express.static(path.join(__dirname, '../../frontend')));

app.use('/api', routes); // usa as rotas que serão criadas

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

