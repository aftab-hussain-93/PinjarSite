import useSWR from "swr"
import { apiUrl } from '../config/api.config';
import { fetcher } from './apiFetcher'

export const getUser = (id) => {
    const url = `${apiUrl}/users/${id}`
    const { data, error, mutate } = useSWR(url, fetcher)

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
        mutate
    }
}