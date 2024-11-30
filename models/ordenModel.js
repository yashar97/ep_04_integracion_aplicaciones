import { Schema, model } from "mongoose";

const ordenSchema = new Schema({
  numeroMesa: {
    type: Number,
    required: true,
  },
  platillos: [
    {
      platillo: {
        type: Schema.Types.ObjectId,
        ref: "Platillo",
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

export default model("Ordenes", ordenSchema);
