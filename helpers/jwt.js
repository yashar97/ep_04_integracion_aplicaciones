import jwt from 'jsonwebtoken'

export const generarToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

export const verificarToken = token => {
    return jwt.verify(token, process.env.JWT_SECRET);
} 