import { Schema, model } from "mongoose";

const platilloSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    ingredientes: [{
        type: String,
        required: true,
        trim: true
    }],
    precio: {
        type: Number,
        required: true
    },
    imagenes: [{
        type: String,
        trim: true
    }]
});

export default model('Platillos', platilloSchema);