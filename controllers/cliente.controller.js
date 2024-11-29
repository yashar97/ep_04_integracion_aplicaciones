import clienteModel from '../models/clienteModel.js'

export const obtenerClientes = async (req, res) => {

    try {
        const clientes = await clienteModel.find();
        res.json(clientes);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message, });
    }

}

export const crearCliente = async (req, res) => {

    const { email, dni } = req.body;

    try {

        const existeEmail = await clienteModel.findOne({ email });
        if (existeEmail) {
            return res.status(409).json({ mensaje: 'El email ya está registrado' });
        }

        const existeDni = await clienteModel.findOne({ dni });
        if (existeDni) {
            return res.status(409).json({ mensaje: 'El dni ya está registrado' });
        }

        const usuario = req.body;
        await clienteModel.create(usuario);

        return res.json({ mensaje: 'Cliente registrado' });

    } catch (error) {
        return res.status(500).json({ mensaje: error.message, });
    }
}

export const actualizarCliente = async (req, res) => {

    const { id } = req.params;

    try {

        const cliente = await clienteModel.findById(id);
        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        const clienteActualizado = {
            nombre: req.body.nombre || cliente.nombre,
            email: req.body.email || cliente.email,
            telefono: req.body.telefono || cliente.telefono,
            dni: req.body.dni || cliente.dni
        }

        await clienteModel.updateOne({ _id: id }, clienteActualizado);

        return res.json({ mensaje: 'Cliente actualizado con exito :)' });

    } catch (error) {
        return res.status(500).json({ mensaje: error.message, });
    }

}

export const eliminarCliente = async (req, res) => {

    const { id } = req.params;

    try {

        const cliente = await clienteModel.findById(id);
        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        await clienteModel.deleteOne({ _id: id });

        return res.json({ mensaje: 'Cliente eliminado' });

    } catch (error) {
        return res.status(500).json({ mensaje: error.message, });
    }
}