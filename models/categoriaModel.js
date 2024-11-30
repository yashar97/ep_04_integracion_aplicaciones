import { Schema, model } from "mongoose"

const categoriaSchema = new Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    activo: {
        type: Boolean,
        default: true
    }

});

export default model('Categoria', categoriaSchema);