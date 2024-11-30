import { Router } from "express";
import {
  crearOrden,
  obtenerOrdenPorMesa,
  editarOrden,
  eliminarOrden,
  obtenerOrdenes
} from "../controllers/orden.controller.js";

const router = Router();

router.get('/', obtenerOrdenes);
router.post("/", crearOrden);
router.get("/:numeroMesa", obtenerOrdenPorMesa);
router.put("/:id", editarOrden);
router.delete("/:id", eliminarOrden);

export default router;
