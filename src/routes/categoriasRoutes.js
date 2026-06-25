import { Router } from "express";
import { Categoria } from "../models/index.js"

export const CategoriaRoutes = Router();

CategoriaRoutes.get('/', async (req, res) => {
    try { res.json(await Categoria.findAll()); } catch (e) { res.status(500).json({ error: e.message }); }
});


// FALTAN DEF RUTAS DEMAS OPERACIONES CRUDS