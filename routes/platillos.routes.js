import { Router } from "express"
import { obtenerPlatillos, crearPlatillo, eliminarPlatillo, editarPlatillo } from "../controllers/platillos.controller.js";

const router = Router();

router.get('/', obtenerPlatillos);
router.post('/', crearPlatillo);
router.delete('/:id', eliminarPlatillo);
router.put('/:id', editarPlatillo);


export default router;