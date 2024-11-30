import bcrypt from 'bcrypt'

export const hashearPassword = password => {
    return bcrypt.hashSync(password, 10);
}

export const checkPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}