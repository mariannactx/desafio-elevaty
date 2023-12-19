import express from 'express';
import { listAll, listOne, create, update, exclude } from './controllers.js';

const router = express.Router();

router.get('/', listAll);

router.get('/:id', listOne);

router.post('/', create);

router.put('/:id', update);

router.delete('/:id', exclude);

export default router;
