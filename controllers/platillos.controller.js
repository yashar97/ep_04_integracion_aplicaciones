import platillosModel from "../models/platilloModel.js";

export const obtenerPlatillos = async (req, res) => {
  try {
    const platillos = await platillosModel.find();

    return res.json(platillos);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const crearPlatillo = async (req, res) => {
  const platillo = req.body;

  try {
    await platillosModel.create(platillo);

    return res.json({ mensaje: "Platillo creado exitosamente" });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const eliminarPlatillo = async (req, res) => {
  const { id } = req.params;

  try {
    const existePlatillo = await platillosModel.findById(id);

    if (!existePlatillo) {
      return res.status(404).json({ mensaje: "Platillo no encontrado" });
    }

    await platillosModel.deleteOne({ _id: id });

    return res.json({ mensaje: "Platillo eliminado exitosamente" });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const editarPlatillo = async (req, res) => {
  const { id } = req.params;

  try {
    const existePlatillo = await platillosModel.findById(id);

    if (!existePlatillo) {
      return res.status(404).json({ mensaje: "Platillo no encontrado" });
    }

    const platilloActualizado = {
      nombre: req.body.nombre || existePlatillo.nombre,
      precio: req.body.precio || existePlatillo.precio,
      ingredientes: req.body.ingredientes || existePlatillo.ingredientes,
      imagenes: req.body.imagenes || existePlatillo.imagenes,
    };

    await platilloModel.updateOne({ _id: id }, platilloActualizado);

    return res.json({ mensaje: "Platillo actualizado exitosamente" });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
