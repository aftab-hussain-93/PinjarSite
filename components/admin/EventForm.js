import React, { useState, useEffect } from 'react'
import EventCard from '../EventCard';

import Datetime from 'react-datetime';
import { usePlacesWidget }  from "react-google-autocomplete";


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

const EventForm = ({ googleKey }) => {
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

    const inputProps = {
        className: 'p-2 mt-1 border-gray-400 border rounded overflow-hidden cursor-pointer w-full'
    }

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

        if (venue !== location.formattedAddress) {
            console.log("Invalid Address")
            return
        }

        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append(
            "image",
            selectedFile,
            selectedFile.name
        );

        // Details of the uploaded file
        console.log(selectedFile);

        // axios.post("http://localhost:3000/api/event/add", formData);
    }

    return (
        <>
            <div className="flex justify-around items-center">
                <h1
                    className="text-3xl pb-4 mt-2 justify-items-center border-gray-300 border-b"
                >Add a New Event
                </h1>
                <span className="text-3xl pb-4 mt-2 justify-items-center border-gray-300 border-b">Preview</span>
            </div>
            <div className="mt-8 p-5 grid grid-cols-3 gap-5 ">
                <form
                    className="flex col-span-2 shadow-md w-full flex-col bg-gray-100 justify-start p-10 "
                    onSubmit={handleSubmit}
                >
                    <label className="text-xl mt-2 pl-1">Event Name</label>
                    <input
                        className='mt-2 shadow-inner rounded p-2 border-gray-600 border'
                        type="text"
                        name="name"
                        placeholder="Enter event name"
                        maxLength="30"
                        onChange={(e) => { setName(e.target.value) }}
                    />

                    <label className="text-xl mt-2 pl-1">Description</label>
                    <textarea
                        className='mt-2 shadow-inner rounded p-2 border-gray-600 border'
                        type="text"
                        name="description"
                        placeholder="Enter event description"
                        onChange={(e) => { setDescription(e.target.value) }}
                        rows="5"
                    />  
                    <div className="flex items-center mt-2">
                        {showCalendar && <div>
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
                    </div>
                    
                    <label className="block border-gray-300 border-b-2 mb-2 text-xl mt-4 pl-1">Location</label>
                    <input
                        className='mt-2 shadow-inner rounded p-2 border-gray-600 border'
                        ref={ref}
                        type="text"
                        name="google"
                        value={venue}
                        onChange={(e) => { setVenue(e.target.value) }}
                    />
                    
                    {location ?
                        (location.formattedAddress === venue ?
                            <div className="grid mt-4 lg:grid-cols-3 grid-cols-1">
                                <div>
                                    <label className="block uppercase font-semibold mb-1">City</label>
                                    <input className='mt-2 shadow-inner rounded p-2 border-gray-600 border' value={location.city} readOnly disabled/>
                                </div>
                                <div>
                                    <label className="block uppercase font-semibold mb-1">State</label>
                                    <input className='mt-2 shadow-inner rounded p-2 border-gray-600 border' value={location.state} readOnly disabled/>
                                </div>
                                <div>
                                    <label className="block uppercase font-semibold mb-1">Country</label>
                                    <input className='mt-2 shadow-inner rounded p-2 border-gray-600 border' value={location.country} readOnly disabled/>
                                </div>

                            </div>
                            : null)
                        : null}

                    <div className="flex justify-around items-center">
                        <label
                            className='btn mt-4 text-primary bg-white border-primary border hover:bg-primary hover:text-white'
                            htmlFor="img">Upload Image</label>
                        <input
                            name="photo"
                            type='file'
                            accept='image/*'
                            id="img"
                            onChange={onSelectFile}
                            hidden
                        />

                        <button
                            className="btn mt-4 text-primary bg-white border-primary border hover:bg-primary hover:text-white"
                            onClick={() => {
                                setShowCalendar(prevState => !prevState)
                            }}
                        >Add Event Timings
                        </button>
                    </div>


                    <button
                        className='mt-4 px-4 py-2 text-xl text-center bg-white border-gray-500 border rounded cursor-pointer'
                        type="submit"
                        placeholder="Add Event"
                    >Add Event
                    </button>

                </form>
                <div className="w-full col-span-1">
                    <EventCard eventName={name} img={preview} description={description} location={location} dateTime={dateTime}/>
                </div>
            </div>
        </>
        
    )
}

export default EventForm
