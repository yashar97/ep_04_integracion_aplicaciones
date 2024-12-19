import meseroModel from '../models/meseroModel.js'
import { checkPassword, hashearPassword } from '../helpers/bcrypt.js'
import { generarToken } from '../helpers/jwt.js';

export const obtenerMeseros = async (req, res) => {
    try {
        const meseros = await meseroModel.find();

        return res.json(meseros);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}

export const agregarMesero = async (req, res) => {

    try {

        const nuevoMesero = req.body;

        nuevoMesero.password = hashearPassword(nuevoMesero.password);

        await meseroModel.create(nuevoMesero);

        return res.json({ mensaje: 'Mesero creado exitosamente' });

    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}

export const login = async (req, res) => {

    const { usuario, password } = req.body;

    try {

        const existe = await meseroModel.findOne({ usuario }).select('-__v');
        if (!existe) {
            return res.status(404).json({ mensaje: 'El nombre de usuario no existe' });
        }

        if (!checkPassword(password, existe.password)) {
            return res.status(403).json({ mensaje: 'Contraseña incorrecta' });
        }

        const meseroAutenticado = {
            _id: existe._id,
            nombre: existe.nombre,
            usuario: existe.usuario,
            rol: existe.rol,
            token: generarToken(existe._id)
        }

        return res.json(meseroAutenticado);



    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}

export const eliminarMesero = async (req, res) => {
    const { id } = req.params;

    try {

        const existe = await meseroModel.findById(id);
        if (!existe) {
            return res.status(404).json({ mensaje: 'El mesero no existe' });
        }

        await meseroModel.deleteOne({ _id: id });

        return res.json({ mensaje: 'Mesero eliminado exitosamente' });

    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}

export const actualizarMesero = async (req, res) => {
    const { id } = req.params;

    try {


        const existe = await meseroModel.findById(id);
        if (!existe) {
            return res.status(404).json({ mensaje: 'El mesero no existe' });
        }

        const meseroActualizado = {
            nombre: req.body.nombre || existe.nombre,
            usuario: req.body.usuario || existe.usuario,
            rol: req.body.rol || existe.rol
        }

        if (req.body.password) {
            meseroActualizado.password = hashearPassword(req.body.password) || existe.password
        }

        await meseroModel.updateOne({ _id: id }, meseroActualizado);

        return res.json({ mensaje: 'Mesero actualizado exitosamente' });

    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}

export const obtenerPerfil = async (req, res) => {
    return res.json(req.mesero);
}