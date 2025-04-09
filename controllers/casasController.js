import fs from 'fs';
const path = './dados.json';

export function getCasas(req, res) {
  const dados = JSON.parse(fs.readFileSync(path));
  res.json(dados);
}

export function addCasa(req, res) {
  const { link, valor, usuario } = req.body;
  if (!link || !valor || !usuario) {
    return res.status(400).json({ message: 'Campos obrigatórios: link, valor, usuario' });
  }

  const casas = JSON.parse(fs.readFileSync(path));
  const novaCasa = {
    id: Date.now(),
    link,
    valor,
    usuario,
    createdAt: new Date()
  };

  casas.push(novaCasa);
  fs.writeFileSync(path, JSON.stringify(casas, null, 2));
  res.status(201).json(novaCasa);
}
