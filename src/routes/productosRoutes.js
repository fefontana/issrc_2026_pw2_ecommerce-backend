import { Router } from "express";
import { Productos } from "../models/index.js"

export const ProductoRoutes = Router();

ProductoRoutes.get('/', async (req, res) => {
    try { res.json(await Productos.findAll()); } catch (e) { res.status(500).json({ error: e.message }); }
});


// FALTAN DEF RUTAS DEMAS OPERACIONES CRUDS