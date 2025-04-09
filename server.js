// server.js
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

const filePath = path.resolve('./dados.json');

function lerDados() {
    if (!fs.existsSync(filePath)) return { casas: [], churrasco: [] };
    const dados = fs.readFileSync(filePath);
    return JSON.parse(dados);
}

function salvarDados(dados) {
    fs.writeFileSync(filePath, JSON.stringify(dados, null, 2));
}

app.get('/dados', (req, res) => {
    res.json(lerDados());
});

app.post('/casa', (req, res) => {
    const dados = lerDados();
    dados.casas.push(req.body);
    salvarDados(dados);
    res.json({ sucesso: true });
});

app.post('/churrasco', (req, res) => {
    const dados = lerDados();
    dados.churrasco.push(req.body);
    salvarDados(dados);
    res.json({ sucesso: true });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
