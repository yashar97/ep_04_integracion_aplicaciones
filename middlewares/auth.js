import meseroModel from "../models/meseroModel.js";
import { verificarToken } from '../helpers/jwt.js'

const autenticarMesero = async (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const { id } = verificarToken(token);

            const mesero = await meseroModel.findById(id).select('-__v -password');
            if (mesero.rol === 'admin') {
                return next();
            }

            return res.status(403).json({ mensaje: 'No tienes los permisos para continuar' });
        } catch (error) {
            return res.status(403).json({ mensaje: 'No estás autorizado para continuar con esta acción' });
        };
    } else {
        return res.status(403).json({ mensaje: 'No autenticado' });
    }

}

export default autenticarMesero;