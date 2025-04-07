import express from 'express';
const router = express.Router();

import buscarIlhaBela from '../controllers/ilhaBela/buscarIlhaBela.js';
import criarIlhaBela from '../controllers/ilhaBela/criarIlhaBela.js';
import atualizarIlhaBela from '../controllers/ilhaBela/atualizarIlhaBela.js';
import deletarIlhaBela from '../controllers/ilhaBela/deletarIlhaBela.js';
import parcialIlhaBela from '../controllers/ilhaBela/parcialIlhaBela.js';

router.get('/', buscarIlhaBela);
router.post('/', criarIlhaBela);
router.put('/', atualizarIlhaBela);
router.delete('/', deletarIlhaBela);
router.patch('/', parcialIlhaBela);

export default router;
