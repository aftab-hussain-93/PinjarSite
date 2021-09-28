import Router from 'next/router'
import useSWR from 'swr';
import { apiUrl } from '../config/api.config';
import { fetcher } from './apiFetcher'

export const getAddressObject = (address_components) => {
    let ShouldBeComponent = {
        state: [
            "administrative_area_level_1",
            "administrative_area_level_2",
            "administrative_area_level_3",
            "administrative_area_level_4",
            "administrative_area_level_5"
        ],
        city: [
            "locality",
            "sublocality",
            "sublocality_level_1",
            "sublocality_level_2",
            "sublocality_level_3",
            "sublocality_level_4"
        ],
        country: ["country"]
    };

    let address = {
        state: "",
        city: "",
        country: ""
    };
    address_components.forEach(component => {
        for (let shouldBe in ShouldBeComponent) {
            if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
                address[shouldBe] = component.long_name;
            }
        }
    });
    return address;
}

export const cancelAddEvent = (e) => {
    e.preventDefault()
    return Router.push('/admin/events')
}

export const useAdminEvents = () => {
    const url = `${apiUrl}/events/user`
    const { data, error, mutate } = useSWR(url, fetcher)
    let isError = false
    if (data && !(Array.isArray(data))) isError = true

    return {
        events: data,
        isLoading: !error && !data,
        isError: error || isError,
        mutate
    }
}