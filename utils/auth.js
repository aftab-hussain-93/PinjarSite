import axios from 'axios'
import Router from 'next/router'
import { apiUrl } from '../config/api.config'
import useSWR from 'swr'
import { fetcher } from './apiFetcher'

export const logout = async () => {
    await axios.get(`${apiUrl}/auth/logout`, { withCredentials: true });
    Router.push('/')
}

export const login = async (userData) => {
    try {
        const { data, status } = await axios.post(`${apiUrl}/auth/login`, userData, { withCredentials: true });
        const { user, message, error } = data
        
        return {
            status,
            user,
            message,
            error
        }
    } catch (e) {
        return {
            error: e,
            message: 'Could not login'
        }
    }
}

export const profile = async () => {
    await axios.get(`${apiUrl}/auth/profile`, { withCredentials: true });
}

export const useProfile = () => {
    const url = `${apiUrl}/auth/profile`
    const { data, error, mutate } = useSWR(url, fetcher)
    let isError = false
    if (data && !('user' in data)) isError = true
    
    return {
        user: data?.user,
        isLoading: !error && !data,
        isError: error || isError,
        mutate
    }
}

export const useAdminUsers = () => {
    const url = `${apiUrl}/users`
    const { data, error, mutate } = useSWR(url, fetcher)
    let isError = false
    if (data && !(Array.isArray(data))) isError = true

    return {
        users: data,
        isLoading: !error && !data,
        isError: error || isError,
        mutate
    }
}