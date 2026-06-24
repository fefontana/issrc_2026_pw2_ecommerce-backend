import { Router } from 'express';
import { ProductoRoutes } from './productosRoutes.js';
// ... aqui importaríamos routers de otros modelos

/*
Indexaremos todos los routers individuales en uno global y declararemos el url estático donde se ubicará cada uno.
*/

const router = Router();

router.use('/productos', ProductoRoutes);
/*
router.get('/productos', (req, res) => {
  res.send('Listado de productos');
});
*/
export default router;
