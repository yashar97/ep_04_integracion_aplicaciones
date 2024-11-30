import { Router } from "express"
import { actualizarCategoria, agregarCategoria, eliminarCategoria, obtenerCategorias } from "../controllers/categoria.controller.js";

const router = Router();

router.get('/', obtenerCategorias);
router.post('/', agregarCategoria);
router.put('/:id', actualizarCategoria);
router.delete('/:id', eliminarCategoria);

export default router;