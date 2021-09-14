import React from 'react'
// Components
import EventModal from './EventModal';

// Helpers
import { formatDate } from '../../utils/dateUtils'
// Config
import { serverUrl } from '../../config/api.config'

const setHidden = () => { // Hiding scroll bar when modal is open
    if (document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }
}

const EventCard = ({ event: { id, title, image, description, eventDate, city, state, country, creator: { firstName } } } = {}) => {    
    const [showModal, setShowModal] = React.useState(false);
    const imagePath = serverUrl + "/" + image
    
    const closeModal = () => {
        setShowModal(false)
        setHidden()
    }

    const openModal = () => {
        setShowModal(true)
        setHidden()
    }

    return (
        <article className="eventCard h-65 ">
            <img src={imagePath} className="w-full h-40 sm:h-56 object-cover" />
            <div className="m-4">
                <div className="flex justify-between">
                    <button onClick={() => setShowModal(true)} className="font-bold hover:underline capitalize">{title}</button>
                    <span className="text-gray-500 text-sm capitalize">Posted by {firstName}</span>
                </div>
                {city && state && country && <span className="text-gray-500 text-md font-bold">{city}, {state}, {country}</span>}
                <div className="sm:h-10 overflow-hidden text-gray-500 text-sm sm:block hidden">
                    {description}
                </div>
                <div>
                    <button onClick={openModal} className="text-primary text-sm font-bold cursor-pointer tracking-wider hover:text-gray-500">More Details</button>
                </div>
            </div>
            <div className="badge border border-gray-400 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className='ml-1 px-1 capitalize text-xs'>{formatDate(eventDate)}</p>
            </div>

            <EventModal
                showModal={showModal}
                closeModal={closeModal}
                title={title}
                imagePath={imagePath}
                city={city}
                state={state}
                country={country}
                eventDate={eventDate}
                firstName={firstName}
                description={description}
            />
 
        </article>
    )
}

export default EventCard
