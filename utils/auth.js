import axios from 'axios'
import Router, { useRouter } from 'next/router'

export const loginUser = async (email, password) => {
    const { data } = await axios.post("/api/login", { email, password })

    return data
}

export const logoutUser = async () => {
    await axios.get(`/api/logout`)
    Router.push('/')
}