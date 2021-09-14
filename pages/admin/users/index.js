import { useState } from 'react'
import Router from 'next/router'
// Components
import Meta from '../../../components/Meta'
import FullPageLoader from '../../../components/Loaders/FullPageLoader'
import Alert from '../../../components/Alerts/alert'
// Config
import { apiUrl } from '../../../config/api.config'
// Helpers
import { useProfile, useAdminUsers } from '../../../utils/auth'

const users = () => {
    const [{show, message, type}, setalert] = useState({ show: false, message: "", type: "info" })
    const { users, isLoading: usersLoading, isError: usersError, mutate } = useAdminUsers()
    const { user: loggedInUser, isLoading, isError } = useProfile()    
    
    if (isError) Router.push('/')
    if (!loggedInUser.isAdmin) Router.push('/admin/dashboard')
    if (usersLoading || isLoading) return (<FullPageLoader />)

    const showAlertWithMessage = (message, type) => {
        setalert({ show: true, message, type})
    }

    const closeAlertBox = () => {
        setalert({ show: false, message: "", type: "info" })
    }

    const toggleStatus = async (userId) => {
        await fetch(`${apiUrl}/users/status/${userId}`, { credentials: "include" }).then(res => res.json())
        mutate()
        showAlertWithMessage('User Status Updated', 'info')
    }

    return (
        <>
            <Meta title='User Management' />
            <Alert message={message} showAlert={show} closeAlertBox={closeAlertBox} type={type}/>
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary ">User Management</span>
            </div>
            <div className="container mt-5">
                <div className="container mt-5">
                    <div className="flex flex-start gap-10">
                        <h1 className="text-2xl font-semibold leading-normal capitalize text-gray-600 block">User List</h1>
                        <a
                            href="/admin/users/add"
                            className="rounded py-1 px-2  sm:py-1 sm:px-2 font-normal capitalize cursor-pointer tracking-tight sm:tracking-wide hover:bg-white hover:text-primary border-primary border bg-primary text-white">
                            Add User
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-5 pl-2 pr-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        users && users.map((user, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {user.firstName} {user.lastName}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{user.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {user.isActive ? (<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Active
                                                        </span>) : (<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                            Deleted
                                                        </span>)}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {user.isAdmin ? `Admin` : `Default`}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <a
                                                            href={`users/edit/${user.id}`}
                                                            className="text-primary hover:text-black">
                                                            Edit
                                                        </a>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button onClick={() => { toggleStatus(user.id) }} className="text-primary hover:text-black">{user.isActive? 'Delete':'Active'}</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default users