import React, { useState, useEffect } from 'react'
import EventCard from "../Events/EventCard"

import Datetime from 'react-datetime';
import { usePlacesWidget }  from "react-google-autocomplete";
import axios from 'axios'

const getAddressObject = (address_components) =>{
    let ShouldBeComponent = {
        state: [
            "administrative_area_level_1",
            "administrative_area_level_2",
            "administrative_area_level_3",
            "administrative_area_level_4",
            "administrative_area_level_5"
        ],
        city: [
            "locality",
            "sublocality",
            "sublocality_level_1",
            "sublocality_level_2",
            "sublocality_level_3",
            "sublocality_level_4"
        ],
        country: ["country"]
    };

    let address = {
        state: "",
        city: "",
        country: ""
    };
    address_components.forEach(component => {
        for (let shouldBe in ShouldBeComponent) {
            if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
                address[shouldBe] = component.long_name;
            }
        }
    });
    return address;
}

const EventForm = ({ googleKey, setAddEvent }) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [dateTime, setDateTime] = useState(null)
    const [location, setLocation] = useState("")
    const [venue, setVenue] = useState("")
    const [showCalendar, setShowCalendar] = useState(false)

    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: googleKey,
        options: {
            // types: ['(cities)'],
            types: ['geocode'],
            componentRestrictions: { country: "in" }
        },
        onPlaceSelected: (place) => {
            // console.log(place.formatted_address);
            setVenue(place.formatted_address)
            // console.log(getAddressObject(place.address_components))
            return setLocation({
                formattedAddress: place.formatted_address,
                ...getAddressObject(place.address_components)
            })
        }
    });

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

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!selectedFile) {
            console.log("No file selected")
            return
        }

        // if (venue !== location.formattedAddress) {
        //     console.log("Invalid Address")
        //     return
        // }

        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );
        formData.append('upload_preset', 'knfx6ule')

        const res = await axios.post("https://api.cloudinary.com/v1_1/dthf9n79u/image/upload", formData);
        
        const eventData = {
            title: name,
            description,
            venue: { ...location, fullAddress: location.formattedAddress },
            photo: res.data.secure_url,
            eventDate: dateTime
        }
        const addEventUrl = process.env.NEXT_PUBLIC_SERVER_URL + '/api/events'
        await axios.post(`/api/events`, eventData);
        setAddEvent(false)
    }

    return (
        <>
            <div className="flex justify-around items-center">
                <h1
                    className="text-2xl sm:text-3xl pb-4 mt-2 justify-items-center font-semibold text-black"
                >Create Event
                </h1>
            </div>
            {/* <div className="mt-3 p-5 grid grid-cols-1 lg:grid-cols-3 gap-5 "> */}
            <div className="max-w-md mx-auto bg-gray-50 rounded-lg overflow-hidden md:max-w-xl ">
                <form
                    className="flex col-span-1 lg:col-span-2 shadow-md border w-full flex-col justify-start sm:p-10 p-4 gap-5"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-lg">Title</span>
                            <input
                                type="text"
                                maxLength="30"
                                name="name"
                                onChange={(e) => { setName(e.target.value) }}
                                className="h-12 px-3 w-full  border-2 rounded focus:outline-none  focus:border-primary"
                                required
                            />
                        </div>
                        <div>
                            <span className="text-md">Event Date</span> <br/>
                            <input
                                type="date"
                                name="event_date"
                                className="h-12 px-3  border-2 rounded focus:outline-none focus:border-primary"
                                onChange={(e) => { setDateTime(e.target.value) }}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <span className="text-lg">Description</span>
                        <textarea
                            type="text"
                            name="description"
                            placeholder="Enter event description"
                            onChange={(e) => { setDescription(e.target.value) }}
                            className="h-24 py-1 px-3 w-full border-2  rounded focus:outline-none focus:border-primary"
                            required
                        ></textarea>
                        <div> <span className="text-sm text-gray-400">You will be able to edit this information later</span> </div>
                    </div>
                    <div> <span className="text-lg">Images</span>
                        <div className="relative h-32 rounded-lg border-dashed border-2  bg-gray-100 flex justify-center items-center">
                            <div className="absolute">
                                <div className="flex flex-col items-center"> <i className="fa fa-folder-open fa-3x text-primary"></i> <span className="block text-gray-400 font-normal">Upload Images here</span> </div>
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
                    <p className="text-lg mt-2 border-b ">Venue Details</p>
                    <div className="mb-1 mt-2">
                        <span className="text-sm">Full Address</span>
                        <input
                            ref={ref}
                            type="text"
                            name="google"
                            value={venue}
                            onChange={(e) => { setVenue(e.target.value) }}
                            autoComplete="off"
                            className="h-12 px-3 w-full  border-2 rounded focus:outline-none focus:border-primary"
                            required
                        />
                    </div>                   
                    
                    {location ?
                        // (location.formattedAddress === venue ?
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
                            // : null)
                        : null}

                    {/* <div className="flex justify-around items-center relative">
                        <button
                            className="btn mt-4 text-primary bg-white border-primary border hover:bg-primary hover:text-white"
                            onClick={() => {
                                setShowCalendar(prevState => !prevState)
                            }}
                        >Add Event Timings
                        </button>
                        {showCalendar && <div className="absolute">
                            <label className="text-xl mr-4 pl-1">Event Date & Time</label>
                            <Datetime
                                initialValue={new Date()}
                                closeOnSelect={true}
                                input={false}
                                inputProps={inputProps} onChange={(e) => {
                                    if (e) {
                                        return setDateTime(e.format('Do MMMM YYYY'))
                                    }
                                }} />
                        </div>}
                    </div> */}
                    <div className="mt-3 flex justify-end gap-5">
                        <button
                            onClick={() => { setAddEvent(false) }}
                            className="hover:underline text-primary">Cancel
                        </button>
                        <button
                            className="downloadBtn"
                        >Create</button>
                    </div>
   

                </form>
                {/* <div className="w-full col-span-1 mt-2 lg:m-0">
                    <p className="text-3xl lg:hidden pb-4 mt-2 justify-items-center font-semibold text-black text-center">Preview</p>
                    <EventCard eventName={name} img={preview} description={description} location={location} dateTime={dateTime}/>
                </div> */}
            </div>
        </>
        
    )
}

export default EventForm
