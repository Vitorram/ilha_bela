const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rotas

// Get geral
app.get('/dados', async (req, res) => {
  const casas = await prisma.casa.findMany();
  const churrasco = await prisma.itemChurrasco.findMany();
  res.json({ casas, churrasco });
});

// Criar casa
app.post('/casas', async (req, res) => {
  const { link, valor, usuario } = req.body;
  const novaCasa = await prisma.casa.create({ data: { link, valor, usuario } });
  res.json(novaCasa);
});

// Criar item de churrasco
app.post('/churrasco', async (req, res) => {
  const { nome, valor } = req.body;
  const novoItem = await prisma.itemChurrasco.create({ data: { nome, valor } });
  res.json(novoItem);
});

// Atualizar casa
app.post('/dados', async (req, res) => {
  const { link, valor, usuario } = req.body;
  const casa = await prisma.casa.updateMany({
    where: { link },
    data: { valor, usuario }
  });
  res.json(casa);
});

// Atualização total (PUT) — ex: remover
app.put('/dados', async (req, res) => {
  await prisma.casa.deleteMany();
  await prisma.itemChurrasco.deleteMany();

  const casas = req.body.casas || [];
  const churrasco = req.body.churrasco || [];

  await prisma.casa.createMany({ data: casas });
  await prisma.itemChurrasco.createMany({ data: churrasco });

  res.json({ ok: true });
});

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
