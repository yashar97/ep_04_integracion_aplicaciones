import { Schema, model } from "mongoose";

const meseroSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    usuario: {
        type: String,
        required: true, 
        unique: true
    },  
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['admin', 'mesero'],
        default: 'mesero'
    }
});

export default model('Mesero', meseroSchema);