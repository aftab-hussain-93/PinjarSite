import { useState, useEffect } from 'react'
import Router from 'next/router'
// Components
import Meta from '../../components/Meta'
import FullPageLoader from '../../components/Loaders/FullPageLoader'
import Alert from '../../components/Alerts/alert'
import AddPersonalityModal from '../../components/modals/AddPersonalityModal'
// Config
import { apiUrl, avatarDir, reportsDir } from '../../config/api.config'
// Helpers
import { useProfile } from '../../utils/auth'
import { usePersonality } from '../../utils/personalityUtils'
import { formatFullDate } from '../../utils/dateUtils'

const setHidden = () => { // Hiding scroll bar when modal is open
    if (document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }
}

const personalities = () => {
    const [{ show, message, type }, setalert] = useState({ show: false, message: "", type: "info" })
    const [showModal, setShowModal] = useState(false);
    const { user: loggedInUser, isLoading, isError } = useProfile()
    const { personalities, isLoading: usersLoading, isError: reportError, mutate } = usePersonality()

    if (isError || reportError) Router.push('/')
    if (!loggedInUser.isAdmin) Router.push('/admin/events')
    if (usersLoading || isLoading) return (<FullPageLoader />)

    const showAlertWithMessage = (message, type) => {
        setalert({ show: true, message, type })
    }

    const closeAlertBox = () => {
        setalert({ show: false, message: "", type: "info" })
    }

    const closeModal = () => {
        setShowModal(false)
        setHidden()
    }

    const openModal = () => {
        setShowModal(true)
        setHidden()
    }

    const deletePersonality = async (personId) => {
        try {
            const resp = await fetch(`${apiUrl}/personalities/delete/${personId}`, { credentials: "include" })
            const { status, message } = await resp.json()
            if (status === 200) {
                showAlertWithMessage(message, 'success')
            } else {
                showAlertWithMessage(message, 'error')
            }
        } catch (e) {
            showAlertWithMessage(`Could not delete person. Please try again later.`, 'error')
        }
        mutate()
    }

    const createPersonality = async ({ fullName, designation, file }) => {
        const formData = new FormData();
        // Update the formData object
        formData.append(
            "file",
            file,
            file.name
        );
        formData.append('fullName', fullName)
        formData.append('designation', designation)

        try {
            const resp = await fetch(`${apiUrl}/personalities`, {
                method: 'POST',
                body: formData,
                credentials: "include"
            })
            if (resp.status === 201) {
                mutate()
                showAlertWithMessage('Personality added successfully.', 'success')
            } else {
                throw new Error(`Could not create personality.`)
            }
        } catch (e) {
            showAlertWithMessage('Could not create personality, please try again later.', 'error')
        }
    }

    return (
        <>
            <Meta title='Personality Management' />
            <Alert message={message} showAlert={show} closeAlertBox={closeAlertBox} type={type} />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary ">Personalities Management</span>
            </div>
            <div className="container mt-5">
                <div className="container mt-5">
                    <div className="flex flex-start gap-10">
                        <h1 className="text-2xl font-semibold leading-normal capitalize text-gray-600 block">Personality List</h1>
                        <button
                            onClick={() => {
                                openModal()
                            }}
                            className="rounded py-1 px-2  sm:py-1 sm:px-2 font-normal capitalize cursor-pointer tracking-tight sm:tracking-wide hover:bg-white hover:text-primary border-primary border bg-primary text-white">
                            Add Personality
                        </button>
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
                                            Full Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Occupation
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Creation Date
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        personalities && personalities.map(({ id, designation, fullName, createdAt }, key) => {

                                            const creationDate = formatFullDate(createdAt)
                                            return (
                                                <tr key={key}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {fullName}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{designation}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{creationDate}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button onClick={() => { deletePersonality(id) }} className="text-primary hover:text-black">Delete</button>
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
            <AddPersonalityModal
                showModal={showModal}
                closeModal={closeModal}
                submitHandler={createPersonality}
            />
        </>
    )
}

export default personalities