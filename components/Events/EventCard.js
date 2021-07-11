import React, { useRef, useEffect } from 'react'
import { getMonthName } from '../../utils/dateUtils'

const EventCard = ({ id, title, photo, description, eventDate, venue, eventCreator="Mario" }) => {
    const [showModal, setShowModal] = React.useState(false);
    let date = ""
    if (eventDate) {
        const dateObj = new Date(eventDate)
        const [month, day, year] = [dateObj.getMonth(), dateObj.getDate(), dateObj.getFullYear()];
        const monthName = getMonthName(month)

        date = `${day}-${monthName}-${year}`
    }

    return (
        <article className="eventCard h-65 ">
            <img src={photo} className="w-full h-40 sm:h-56 object-cover" />
            <div className="m-4">
                <div className="flex justify-between">
                    {/* <a href={`/events/${id}`} className="font-bold hover:underline">{title}</a> */}
                    <button onClick={() => setShowModal(true)} className="font-bold hover:underline capitalize">{title}</button>
                    <span className="text-gray-500 text-sm capitalize">Posted by {eventCreator}</span>
                </div>
                {venue && <span className="text-gray-500 text-md font-bold">{venue.city}, {venue.state }, {venue.country}</span>}
                <div className="sm:h-10 overflow-hidden text-gray-500 text-sm sm:block hidden">
                    {description}
                </div>
                <div>
                    <button onClick={() => setShowModal(true)} className="text-primary text-sm font-bold cursor-pointer tracking-wider hover:text-gray-500">More Details</button>
                </div>
            </div>
            <div className="badge border border-gray-400 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className='ml-1 px-1 capitalize text-xs'>{date}</p>
            </div>

            {showModal ? (
                // <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                >
                    <div className="h-screen w-screen  backdrop-filter backdrop-blur-sm absolute top-0 left-0">

                    </div>
                    <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white text-gray-600 border border-gray-700 shadow-md">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                            <div className="flex items-center justify-between p-5 rounded-t ">
                                <div className="">
                                    <h3 className="text-3xl font-semibold capitalize">
                                        {title}
                                    </h3>
                                </div>

                                <button
                                    className="p-0 m-0"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="text-3xl font-semibold">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div className="relative px-6 py-2 flex-auto min-w-max break-all overflow-x-hidden">
                                <div className="flex items-start justify-between border-b border-solid pb-2 gap-40">
                                    <p className="text-sm font-semibold">{date}</p>
                                    <p className="text-sm font-semibold capitalize">Posted By {eventCreator}</p>
                                </div>
                            </div>
                            <div className="px-6 py-2">
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed border-b border-solid">
                                    {description}
                                </p>
                            </div>
                            <div className="flex items-center justify-end px-6 py-2 rounded-b">
                                <button
                                    className="text-primary background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            ) : null}
        </article>
    )
}

export default EventCard
