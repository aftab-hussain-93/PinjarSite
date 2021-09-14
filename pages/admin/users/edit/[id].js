import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import EditUserForm from '../../../../components/forms/EditUser'
import Meta from '../../../../components/Meta'
import FullPageLoader from '../../../../components/Loaders/FullPageLoader'

import useSWR from 'swr'
import { fetcher } from '../../../../utils/apiFetcher'
import { apiUrl } from '../../../../config/api.config'

const EditUser = () => {
    const router = useRouter()
    const { id } = router.query
    const [mounted, setMounted] = useState(false)
    const url = `${apiUrl}/users/${id}`
    const { data, error } = useSWR(mounted ? url : null, fetcher)
    let isLoading 
    if (!data && !error) isLoading = true
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (isLoading) return <FullPageLoader />   

    return (
        <>
            <Meta title='User Management' />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary ">User Management</span>
            </div>
            <div className="container mt-5">
                <div className="container mt-5">
                    <div className="flex justify-center gap-10">
                        <h1 className="text-2xl font-semibold leading-normal capitalize text-gray-600 block">Edit User</h1>
                    </div>
                    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl mt-5">
                        <EditUserForm
                            userDetails={data.user}
                            userId={id}
                        />
                    </div>
                </div>
            </div>
        </>
    )

}

export default EditUser