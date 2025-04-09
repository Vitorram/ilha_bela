import fs from 'fs';
const path = './dados/churrasco.json';

export function getChurrasco(req, res) {
  const dados = JSON.parse(fs.readFileSync(path));
  res.json(dados);
}

export function addItem(req, res) {
  const { nome, valor } = req.body;
  if (!nome || !valor) {
    return res.status(400).json({ message: 'Campos obrigatórios: nome, valor' });
  }

  const itens = JSON.parse(fs.readFileSync(path));
  const novoItem = {
    id: Date.now(),
    nome,
    valor,
    createdAt: new Date()
  };

  itens.push(novoItem);
  fs.writeFileSync(path, JSON.stringify(itens, null, 2));
  res.status(201).json(novoItem);
}
