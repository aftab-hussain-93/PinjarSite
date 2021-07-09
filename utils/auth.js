import bcrypt from 'bcryptjs'

const SALT_ROUNDS = 10

export const generateHash = (password) => {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

export const comparePassword = (hash, password) => {
    return bcrypt.compareSync(password, hash);
}