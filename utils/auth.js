import axios from 'axios'
import Router from 'next/router'

export const logout = async () => {
    await axios.get('http://localhost:3000/api/v1/auth/logout', { withCredentials: true });
    Router.push('/')
}

export const login = async (userData) => {
    await axios.post('http://localhost:3000/api/v1/auth/login', userData, { withCredentials: true });
    Router.push('/admin/dashboard')
}

export const profile = async () => {
    await axios.get('http://localhost:3000/api/v1/auth/profile', { withCredentials: true });
}