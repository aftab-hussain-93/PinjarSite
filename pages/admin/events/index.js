import { useState } from 'react';
import useSWR from 'swr'
// Components
import Meta from '../../../components/Meta'
import EventModal from '../../../components/Events/EventModal'

// Config
import { apiUrl, serverUrl } from '../../../config/api.config'
// Helpers
import { formatFullDate } from '../../../utils/dateUtils'
import Router  from 'next/router';
import { fetcher } from '../../../utils/apiFetcher';

const setHidden = () => { // Hiding scroll bar when modal is open
    if (document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }
}


const adminEvents = ({ events }) => {
    const [showModal, setShowModal] = useState(false);
    const [event, setModalEvent] = useState(null)
    const [allEvents, setAllEvents] = useState(events)
    const { data, error } = useSWR(`${apiUrl}/auth/profile`, fetcher)
    if (error || data.error) return Router.push('/')
    const loggedInUser = data.user
    
    const deleteEvent = async (eventId) => {
        await fetch(`${apiUrl}/events/delete/${eventId}`, { credentials: "include" })
        const newEvents = await fetch(`${apiUrl}/events/user`, { credentials: "include" }).then(res => res.json())
        setAllEvents(newEvents)
    }

    const closeModal = () => {
        setShowModal(false)
        setHidden()
        setModalEvent(null)
    }

    const openModal = () => {
        setShowModal(true)
        setHidden()
    }
    const viewEvent = (event) => {
        setModalEvent(event)
        openModal()
    }
 
    return (
        <>
            <Meta title='Events Management' />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary ">Events Management</span>
            </div>
            <div className="container mt-5">
                <div className="container mt-5">
                    <div className="flex flex-start gap-10">
                        <h1 className="text-2xl font-semibold leading-normal capitalize text-gray-600 block">Event List</h1>
                        <a
                            href="/admin/events/add"
                            className="rounded py-1 px-2  sm:py-1 sm:px-2 font-normal capitalize cursor-pointer tracking-tight sm:tracking-wide hover:bg-white hover:text-primary border-primary border bg-primary text-white">
                            Add Event
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
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Creator
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Event Date
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Creation Date
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">View</span>
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        allEvents && allEvents.map(({ id, title, image, description, eventDate, city, state, createdBy, country, createdAt, creator: { firstName, lastName } }, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {title}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{firstName} {lastName}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{formatFullDate(eventDate)}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{formatFullDate(createdAt)}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{city}, {state}, {country}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button
                                                            onClick={() => { viewEvent({ title, description, eventDate, city, state, country, firstName, imagePath: serverUrl + image}) }}
                                                            className="text-primary hover:text-black">View</button>
                                                    </td>
                                                    {loggedInUser && (loggedInUser.isAdmin || loggedInUser.id === createdBy) &&
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button onClick={() => { deleteEvent(id) }} className="text-primary hover:text-black">Delete</button>
                                                        </td>
                                                    }
                                                </tr>
                                            )
                                        }
                                        )
                                    }

                                </tbody>
                            </table>

                            <EventModal
                                showModal={showModal}
                                closeModal={closeModal}
                                {...event}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const ctxCookie = context.req ? context.req.headers.cookie : null

    const events = await fetch(`${apiUrl}/events/user`, {
        headers: {
            cookie: ctxCookie
        }
    }).then(res => res.json())

    return {
        props: {
            events
        }, // will be passed to the page component as props
    }
}


export default adminEvents