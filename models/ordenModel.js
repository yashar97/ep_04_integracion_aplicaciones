import { Schema, model } from "mongoose";

const ordenSchema = new Schema({
  mesaId: {
    type: Number,
    required: true,
  },
  platillos: [
    {
      platilloId: {
        type: Schema.Types.ObjectId,
        ref: "Platillos",
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  estado: {
    type: String,
    enum: ["pendiente", "entregado", "cancelado"],
    default: "pendiente",
  },
});

export default model("Orden", ordenSchema);
