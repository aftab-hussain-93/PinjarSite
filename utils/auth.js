import axios from 'axios'
// import Router, { useRouter } from 'next/router'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

// export const loginUser = async (email, password) => {
//     const { data } = await axios.post("/api/login", { email, password })

//     return data
// }

// export const logoutUser = async () => {
//     await axios.get(`/api/logout`)
//     Router.push('/')
// }

export const generateHash = (password) => {
    const hash = bcrypt.hashSync(password, SALT_ROUNDS);
    return hash
}

export const comparePassword = (hash, password) => {
    return bcrypt.compareSync(password, hash);
}