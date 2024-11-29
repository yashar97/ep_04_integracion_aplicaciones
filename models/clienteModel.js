import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    dni: {
        type: String,
        unique: true,
        trim: true
    },
});

export default model('Cliente', clienteSchema);