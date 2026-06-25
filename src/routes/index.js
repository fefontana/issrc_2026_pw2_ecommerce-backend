import { Router } from 'express';
import { ProductoRoutes } from './productosRoutes.js';
import { CategoriaRoutes } from './categoriasRoutes.js';
// ... aqui importaríamos routers de otros modelos

/*
Indexaremos todos los routers individuales en uno global y declararemos el url estático donde se ubicará cada uno.
*/

const router = Router();

router.use('/productos', ProductoRoutes);
router.use('/categorias', CategoriaRoutes);

export default router;
