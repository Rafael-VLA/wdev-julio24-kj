import express from 'express';
import { create, getAll, getById, remove, update } from '../controllers/empleado';

const router = express.Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', remove);
router.put('/:id', update);

export default router;