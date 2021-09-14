import Router from 'next/router'
import React, { useState } from 'react'

import AddEvent from '../../../components/forms/AddEvent'
import Alert from '../../../components/Alerts/alert'

// config
import { apiUrl } from '../../../config/api.config'

const EventForm = () => {
    const [{ show, message, type: alertType }, setalert] = useState({ show: false, message: "", type: "info" })

    const [missingFieldsError, setMissingFieldsError] = useState(false)
    const [{ title, description, location, selectedFile, venue, eventDate }, setFormValue] = useState({ title: "", description: "", location: "", selectedFile: null, venue: "", eventDate: new Date() })
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [formErrors, setFormError] = useState({ title: false, date: false, description: false, file: false, location: false })

    const showAlertWithMessage = (message, type) => {
        setalert({ show: true, message, type })
    }

    const closeAlertBox = () => {
        setalert({ show: false, message: "", type: "info" })
    }

    const invalidFormInput = (key) => {
        setFormError(prevState => ({
            ...prevState,
            [key]: true
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!selectedFile) {
            showAlertWithMessage('Please upload an image', 'error')
            return
        }

        if (!title) {
            showAlertWithMessage('Please enter a title', 'error')
            invalidFormInput("title")
            return
        }

        if (!description) {
            showAlertWithMessage('Please enter a short description', 'error')
            invalidFormInput("description")
            return
        }

        if (!location) {
            showAlertWithMessage('Please enter a valid location for the event', 'error')
            invalidFormInput("location")
            return
        }

        if (!isDateSelected) {
            showAlertWithMessage('Please specify event date', 'error')
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
            <Alert message={message} showAlert={show} closeAlertBox={closeAlertBox} type={alertType} />
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
