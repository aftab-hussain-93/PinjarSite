import { apiUrl } from '../config/api.config'
import useSWR from 'swr'
import { fetcher } from './apiFetcher'

export const useReports = () => {
    const url = `${apiUrl}/reports`
    const { data, error, mutate } = useSWR(url, fetcher)
    let isError = false
    if (data && !(Array.isArray(data))) isError = true

    return {
        reports: data,
        isLoading: !error && !data,
        isError: error || isError,
        mutate
    }
}