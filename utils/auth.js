import axios from 'axios'
import Router from 'next/router'
import { apiUrl } from '../config/api.config'

export const logout = async () => {
    await axios.get(`${apiUrl}/auth/logout`, { withCredentials: true });
    Router.push('/')
}

export const login = async (userData) => {
    try {
        await axios.post(`${apiUrl}/auth/login`, userData, { withCredentials: true });
        return {
            status: "ok"
        }
    } catch (e) {
        return {
            error: e
        }
    }
}

export const profile = async () => {
    await axios.get(`${apiUrl}/auth/profile`, { withCredentials: true });
}