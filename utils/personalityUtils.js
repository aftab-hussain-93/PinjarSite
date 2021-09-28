import { apiUrl } from '../config/api.config'
import useSWR from 'swr'
import { fetcher } from './apiFetcher'

export const usePersonality = () => {
    const url = `${apiUrl}/personalities`
    const { data, error, mutate } = useSWR(url, fetcher)
    let isError = false
    if (data && !(Array.isArray(data))) isError = true

    return {
        personalities: data,
        isLoading: !error && !data,
        isError: error || isError,
        mutate
    }
}