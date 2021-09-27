import React, { useState, useEffect } from 'react'
import Datetime from 'react-datetime'
import { usePlacesWidget } from "react-google-autocomplete";

import { googleApiKey } from '../../config/config';

import { getAddressObject, cancelAddEvent } from '../../utils/eventUtils'

const AddEvent = ({
    setFormError,
    handleSubmit,
    missingFieldsError,
    setFormValue,
    title,
    description,
    // Form Errors
    formErrors: { title: titleError, date: dateError, description: descError, file: fileError, location: locError },
    // Date Imports
    eventDate,
    setIsDateSelected,
    // File Imports
    selectedFile,
    // Location
    venue,
    location
}) => {
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])



    // Google Maps API Init
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: googleApiKey,
        options: {
            types: ['(cities)'],
            types: ['geocode'],
            componentRestrictions: { country: "in" }
        },
        onPlaceSelected: (place) => {
            return setFormValue(prevState => ({
                ...prevState,
                location: {
                    formattedAddress: place.formatted_address,
                    ...getAddressObject(place.address_components)
                },
                venue: place.formatted_address
            }))
        }
    });

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            return setFormValue(prevState => ({
                ...prevState,
                selectedFile: null
            }))
        }
        return setFormValue(prevState => ({
            ...prevState,
            selectedFile: e.target.files[0]
        }))
    }


    const selectDate = (date) => {
        setFormValue(prevState => ({
            ...prevState,
            eventDate: date
        }))
        if (typeof date == "string") {
            /** https://www.npmjs.com/package/react-datetime?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library#customize-the-input-appearance
             * Callback trigger when the date changes. The callback receives the selected moment object as only parameter, if the date in the input is valid. If the date in the input is not valid, the callback receives the value of the input (a string)
             */
            setFormError(prevState => ({ ...prevState, date: true }))
            setIsDateSelected(false)
            return
        }
        setFormError(prevState => ({ ...prevState, date: false }))
        setIsDateSelected(true)
    }


    return (
        <form
            className="flex col-span-1 lg:col-span-2 flex-col justify-start sm:p-16 p-10 gap-5"
            onSubmit={handleSubmit}
        >
            {missingFieldsError && <span className="text-sm text-red-500">Please fill all fields before submitting</span>}
            <div className="flex justify-between items-center">
                <div className="w-full pr-5">
                    {titleError && <span className="text-xs text-red-500">*Invalid Input</span>}
                    <label className="text-lg">Title</label>
                    <input
                        type="text"
                        maxLength="45"
                        name="title"
                        value={title}
                        onChange={(e) => { setFormValue(prevState => ({ ...prevState, title: e.target.value })) }}
                        className="h-12 px-3 w-full  border-2 rounded focus:outline-none  focus:border-primary"
                        required
                    />
                </div>
                <div className="pr-4">
                    <label className="text-lg">Event Date</label>
                    {dateError && <span className="text-xs text-red-500">*Invalid Date</span>}
                    <Datetime
                        value={eventDate}
                        onChange={selectDate}
                        className="h-12"
                    />
                </div>
            </div>
            <div>
                <span className="text-lg">Description</span>
                {descError && <span className="text-xs text-red-500">*Invalid Input</span>}
                <textarea
                    type="text"
                    name="description"
                    placeholder="Enter event description"
                    value={description}
                    onChange={(e) => { setFormValue(prevState => ({ ...prevState, description: e.target.value })) }}
                    className="h-36 py-1 px-3 w-full border-2  rounded focus:outline-none focus:border-primary"
                    required
                ></textarea>
            </div>
            <div>
                <span className="text-lg">Images</span>
                <div className="relative h-32 rounded-lg border-dashed border-2  bg-gray-100 flex justify-center items-center">
                    <div className="absolute">
                        <div className="flex flex-col items-center">
                            <i className="fa fa-folder-open fa-3x text-primary"></i>
                            <span className="block text-gray-400 font-normal">Upload Images here</span>
                        </div>
                    </div>
                    <input
                        type="file"
                        className="h-full w-full opacity-0 cursor-pointer"
                        name="photo"
                        accept='image/*'
                        id="img"
                        onChange={onSelectFile}
                        required
                    />
                </div>
                {preview &&
                    <img
                        src={preview}
                        className="p-2 rounded-xl overflow-hidden w-full h-40 sm:h-56 object-cover"
                    />}
            </div>
            <p className="text-lg mt-2">Venue Details</p>
            <div className="mb-1 mt-2">
                <span className="text-sm">Full Address</span>
                <input
                    ref={ref}
                    type="text"
                    name="google"
                    value={venue}
                    onChange={(e) => { setFormValue(prevState => ({ ...prevState, venue: e.target.value })) }}
                    autoComplete="off"
                    className="h-12 px-3 w-full  border-2 rounded focus:outline-none focus:border-primary"
                    required
                />
            </div>

            {location ?
                <div>
                    <div>
                        <span className="text-sm">City</span>
                        <input
                            value={location.city}
                            readOnly
                            disabled
                            className="h-12 px-3 w-full border-gray-200 border-2 rounded focus:outline-none focus:gray-200"
                        />
                    </div>
                    <div>
                        <span className="text-sm">State</span>
                        <input
                            value={location.state}
                            readOnly
                            disabled
                            className="h-12 px-3 w-full border-gray-200 border-2 rounded focus:outline-none focus:gray-200"
                        />
                    </div>
                    <div>
                        <span className="text-sm">Country</span>
                        <input
                            value={location.country}
                            readOnly
                            disabled
                            className="h-12 px-3 w-full border-gray-200 border-2 rounded focus:outline-none focus:gray-200"
                        />
                    </div>
                </div>
                : null}
            <div className="mt-3 flex justify-end gap-5">
                <button
                    onClick={cancelAddEvent}
                    className="hover:underline text-primary">Cancel
                </button>
                <button
                    className="downloadBtn"
                >Create</button>
            </div>
        </form>
    )
}

export default AddEvent
