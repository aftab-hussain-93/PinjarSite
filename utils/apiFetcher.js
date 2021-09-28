export const fetcher = url => {
    return fetch(url, { credentials: "include" }).then(res => {
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError("Invalid server data.");
        }
        return res.json()
    })
}
