import { Router } from "express";
import { Medicos } from "../models/index.js"

export const MedicoRoutes = Router();

MedicoRoutes.get('/', async (req, res) => {
    try { res.json(await Medicos.findAll()); } catch (e) { res.status(500).json({ error: e.message }); }
});

MedicoRoutes.get('/:id', async (req, res) => {
    try { res.json(await Medicos.findByPk(req.params.id)); } catch (e) { res.status(500).json({ error: e.message }); }
});

MedicoRoutes.post('/', async (req, res) => {
    try { res.status(201).json(await Medicos.create(req.body)); } catch (e) { res.status(500).json({ error: e.message }); }
});

MedicoRoutes.put('/:id', async (req, res) => {
    try { 
        await Medicos.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Actualizado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

MedicoRoutes.delete('/:id', async (req, res) => {
    try { 
        await Medicos.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Eliminado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});