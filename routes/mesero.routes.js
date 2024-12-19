import { Router } from "express";
import { actualizarMesero, agregarMesero, eliminarMesero, login, obtenerMeseros, obtenerPerfil } from "../controllers/mesero.controller.js";
import autenticarMesero from '../middlewares/auth.js'

const router = Router();

router.get('/', obtenerMeseros);
router.post('/', autenticarMesero, agregarMesero);
router.post('/login', login);
router.delete('/:id', autenticarMesero, eliminarMesero);
router.put('/:id', autenticarMesero, actualizarMesero);

router.get('/perfil', autenticarMesero, obtenerPerfil);

export default router;  