import React from 'react'
import Modal from 'react-modal'

// Helpers
import { formatFullDate } from  '../../utils/dateUtils'

Modal.setAppElement('body')

const EventModal = ({ showModal, closeModal, title, imagePath, eventDate, firstName, city, state, country, description }) => {
    
    return (
        <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(88, 88, 88, 0.80)'
                }
            }}
            className="w-screen md:w-2/3 xl:w-1/3 mx-auto bg-white border border-gray-300 overflow-y-auto overflow-x-hidden p-2 mt-6"
            contentLabel="Event Details"
        >
            <div className="p-5">
                <h1 className="text-2xl font-semibold border-b pb-1">Event Details</h1>
                <h3 className="text-lg sm:text-xl font-semibold capitalize py-2 text-blueGray-500">
                    {title}
                </h3>
                <img src={imagePath} className="h-80 object-cover mx-auto" />
                <div className="border-b border-solid">
                    <p className="text-sm capitalize pt-2 text-blueGray-500">{formatFullDate(eventDate)}</p>
                    <p className="text-sm capitalize pt-2 text-blueGray-500">Posted By <strong>{firstName}</strong></p>
                    {city && state && country &&
                        <p className="text-sm capitalize pt-2 text-blueGray-500 ">{city}, {state}, {country}
                        </p>
                    }
                </div>
                <p className="my-4 text-blueGray-500 text-md sm:text-lg leading-relaxed">
                    {description}
                </p>
                <div className="flex items-center justify-end rounded-b">
                    <button
                        className="rounded-sm py-1 px-1 sm:py-2 sm:px-4 font-semibold capitalize cursor-pointer tracking-tight sm:tracking-wide hover:bg-white hover:text-red-600 border-red-600 border bg-red-600 text-white"
                        type="button"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default EventModal
