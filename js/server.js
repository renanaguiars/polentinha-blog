const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Dados simulados de recados no mural
let recados = [
    { id: 1, text: 'Vim de Vila Velha para experimentar a polenta rechada e desde então não parei de vir mais.', author: 'Ada Lovelace', email: 'ada@email.com' },
    { id: 2, text: 'O verdadeiro sabor da comida típica da roça você encontra aqui. Eu frequento sempre!', author: 'Bill Gates', email: 'billgates@email.com' },
    { id: 3, text: 'O atendimento é ótimo e a comida é incrível. Além disso, o dono é meu amigo.', author: 'Elon Musk', email: 'elon@email.com' },
    { id: 4, text: 'Que delícia, cara!', author: 'Jailson Mendes', email: 'jailson@email.com' },
    { id: 5, text: 'Tem vaga pra trabalhar aí?', author: 'Anônimo', email: 'anon@email.com' },
    { id: 6, text: 'Pensava que eu era rápido mas a velocidade em que o prato chegou foi mais.', author: 'Usain Bolt', email: 'usain@email.com' }
];

// Endpoint para listar todos os recados
app.get('/api/recados', (req, res) => {
    res.json(recados);
});

// Endpoint para obter um recado por ID
app.get('/api/recados/:id', (req, res) => {
    const recadoId = parseInt(req.params.id);
    const recado = recados.find(r => r.id === recadoId);
    if (recado) {
        res.json(recado);
    } else {
        res.status(404).json({ message: 'Recado não encontrado' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
