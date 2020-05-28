import { Router } from 'express';
import { getTodosProd, createProducto, getDelete, updateProducto } from '../controlles/productos.controller';

const router = Router();

router.post('/nuevoProducto', createProducto);
router.get('/todos', getTodosProd);
router.put('/nuevoProducto/:cod_pro', updateProducto);
router.get('/todos/:cod_pro', getDelete);

export default router;
