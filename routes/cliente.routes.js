import { Router } from "express"
import { actualizarCliente, crearCliente, eliminarCliente, obtenerClientes } from '../controllers/cliente.controller.js'

const router = Router();

router.get('/', obtenerClientes);
router.post('/', crearCliente);
router.put('/:id', actualizarCliente);
router.delete('/:id', eliminarCliente);

export default router;