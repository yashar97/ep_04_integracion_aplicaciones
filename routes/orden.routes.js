import { Router } from "express";
import {
  crearOrden,
  obtenerOrdenPorMesa,
  editarOrden,
  eliminarOrden,
} from "../controllers/orden.controller.js";

const router = Router();

router.post("/", crearOrden);
router.get("/:mesaId", obtenerOrdenPorMesa);
router.put("/:id", editarOrden);
router.delete("/:id", eliminarOrden);

export default router;
