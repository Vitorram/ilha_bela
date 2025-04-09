import express from 'express';
import { getCasas, addCasa } from '../controllers/casasController.js';
import { getChurrasco, addItem } from '../controllers/churrascoController.js';

const router = express.Router();

// Casas
router.get('/casas', getCasas);
router.post('/casas', addCasa);

// Churrasco
router.get('/churrasco', getChurrasco);
router.post('/churrasco', addItem);

export default router;
