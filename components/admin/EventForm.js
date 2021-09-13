import Router from 'next/router'
import React, { useState } from 'react'

import AddEvent from '../forms/AddEvent'

import { apiUrl } from '../../config/api.config'

const EventForm = () => {
    const [missingFieldsError, setMissingFieldsError] = useState(false)
    const [{ title, description, location, selectedFile, venue, eventDate }, setFormValue] = useState({ title: "", description: "", location: "", selectedFile: null, venue: "", eventDate: new Date() })
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [formErrors, setFormError] = useState({ title: false, date: false, description: false, file: false, location: false })

    const invalidFormInput = (key) => {
        setFormError(prevState => ({
            ...prevState,
            [key]: true
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault() 
        if (!selectedFile) {
            console.log("No file selected")
            return
        }

        if (!title) {
            invalidFormInput("title")
            return
        }

        if (!description) {
            invalidFormInput("description")
            return
        }

        if (!location) {
            invalidFormInput("location")
            return
        }

        if (!isDateSelected) {
            invalidFormInput("date")
            return
        }
        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );
        formData.append('eventDate', eventDate.valueOf() / 1000)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('fullAddress', location.formattedAddress)
        formData.append('city', location.city)
        formData.append('state', location.state)
        formData.append('country', location.country)
        await fetch(`${apiUrl}/events`, {
            method: 'POST',
            body: formData,
            credentials: "include"
        })
        Router.push('/admin/events')
    }

    return (
        <>
            <div className="flex justify-around items-center">
                <h1
                    className="text-2xl sm:text-3xl pb-4 mt-2 justify-items-center font-semibold text-black"
                >Create Event
                </h1>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-x-auto overflow-y-scroll h-heroHeight md:max-w-3xl">
                <AddEvent
                    setFormError={setFormError}
                    handleSubmit={handleSubmit}
                    missingFieldsError={missingFieldsError}
                    setFormValue={setFormValue}
                    title={title}
                    description={description}
                    eventDate={eventDate}
                    selectedFile={selectedFile}
                    venue={venue}
                    location={location}
                    formErrors={formErrors}
                    setIsDateSelected={setIsDateSelected}
                    setFormError={setFormError}
                />
            </div>
        </>
        
    )
}

export default EventForm
