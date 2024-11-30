import ordenModel from "../models/ordenModel.js";

export const crearOrden = async (req, res) => {
  const { mesaId, platillos } = req.body;

  try {
    const nuevaOrden = await ordenModel.create({ mesaId, platillos });
    return res.status(201).json({ mensaje: "Orden creada", orden: nuevaOrden });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const obtenerOrdenPorMesa = async (req, res) => {
  const { mesaId } = req.params;

  try {
    const orden = await ordenModel
      .findOne({ mesaId })
      .populate("platillos.platilloId");
    if (!orden) {
      return res.status(404).json({ mensaje: "No hay orden para esta mesa" });
    }

    return res.json(orden);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const editarOrden = async (req, res) => {
  const { id } = req.params;
  try {
    const existeOrden = await ordenModel.findById(id);

    if (!existeOrden) {
      return res.status(404).json({ mensaje: "Orden no encontrada" });
    }

    const ordenActualizada = {
      mesaId: req.body.mesaId || existeOrden.mesaId,
      platillos: req.body.platillos || existeOrden.platillos,
      estado: req.body.estado || existeOrden.estado,
    };

    await ordenModel.updateOne({ _id: id }, ordenActualizada);

    return res.json({ mensaje: "Orden actualizada exitosamente" });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const eliminarOrden = async (req, res) => {
  const { id } = req.params;

  try {
    const orden = await ordenModel.findById(id);
    if (!orden) {
      return res.status(404).json({ mensaje: "Orden no encontrada" });
    }

    await ordenModel.deleteOne({ _id: id });

    return res.json({ mensaje: "Orden eliminada" });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
