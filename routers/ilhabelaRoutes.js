import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const dadosPath = path.resolve('dados.json');

// Função auxiliar para ler o arquivo JSON
function lerDados() {
    const data = fs.readFileSync(dadosPath);
    return JSON.parse(data);
}

// Função auxiliar para salvar no JSON
function salvarDados(dados) {
    fs.writeFileSync(dadosPath, JSON.stringify(dados, null, 2));
}

// Rota principal que retorna tudo
router.get('/dados', (req, res) => {
    const dados = lerDados();
    res.json(dados);
});

// Adicionar casa
router.post('/casas', (req, res) => {
    const dados = lerDados();
    const novaCasa = req.body;
    dados.casas.push(novaCasa);
    salvarDados(dados);
    res.status(201).json({ message: "Casa adicionada com sucesso!" });
});

// Adicionar item de churrasco
router.post('/churrasco', (req, res) => {
    const dados = lerDados();
    const novoItem = req.body;
    dados.churrasco.push(novoItem);
    salvarDados(dados);
    res.status(201).json({ message: "Item de churrasco adicionado com sucesso!" });
});

export default router;
