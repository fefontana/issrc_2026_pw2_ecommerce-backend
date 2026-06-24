import { Router } from 'express';
import { MedicoRoutes } from './medicosRouter.js';


const router = Router();

router.use('/medicos', MedicoRoutes);

export default router;
