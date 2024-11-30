import categoriaModel from "../models/categoriaModel.js"

export const obtenerCategorias = async (req, res) => {

    try {

        const categorias = await categoriaModel.find();

        return res.json(categorias);

    } catch (error) {
        return res.status(500).json({ mensaje: error.message, });
    }
}

export const agregarCategoria = async (req, res) => {

    const nuevaCategoria = req.body;

    try {

        await categoriaModel.create(nuevaCategoria);

        return res.json({ mensaje: 'Categoria creada exitosamente' });

    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}

export const actualizarCategoria = async (req, res) => {

    const { id } = req.params;

    try {

        const categoria = await categoriaModel.findById(id);
        if (!categoria) {
            return res.status(404).json({ mensaje: 'Categoria no encontrada' });
        }

        const categoriaActualizada = {
            nombre: req.body.nombre || categoria.nombre,
            descripcion: req.body.descripcion || categoria.descripcion,
            activo: req.body.activo || categoria.activo
        }

        await categoriaModel.updateOne({ _id: id }, categoriaActualizada);

        return res.json({ mensaje: 'Categoria actualizada exitosamente' });

    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}

export const eliminarCategoria = async (req, res) => {

    const { id } = req.params;

    try {

        const categoriaEliminar = await categoriaModel.findById(id);
        if (!categoriaEliminar) {
            return res.status(404).json({ mensaje: 'Categoria eliminada correctamente' });
        }

        await categoriaModel.deleteOne({ _id: id });
        return res.json({ mensaje: 'Categoria eliminada exitosamente' });

    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
}