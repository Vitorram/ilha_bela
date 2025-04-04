import express from 'express';

const router = express.Router();

// Rotas para IlhaBela
router.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à IlhaBela API!' });
});

export default router;
