import axios from 'axios';
import React, { useState, useEffect } from 'react'
import EventCard from '../EventCard';

import Datetime from 'react-datetime';

import styles from '../../styles/admin/EventForm.module.css'

const EventForm = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [dateTime, setDateTime] = useState(null)

    const inputProps = {
        className: 'p-4 mt-1 border-gray-400 border rounded overflow-hidden cursor-pointer '
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
                    // action="/api/event/add"
                    // method="post"
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
                    <div class="flex items-center mt-2">
                        <label className="text-xl mr-4">Event Date/Time</label>
                        <Datetime
                            initialValue={new Date()}
                            closeOnSelect={true}
                            inputProps={inputProps} onChange={(e) => {
                                // console.log(e.toISOString())
                                // console.log(e.format('Do MMMM YYYY'))
                                return setDateTime(e.format('Do MMMM YYYY'))
                            }} />
                    </div>

                    
                    {/* <div class="flex justify-center mt-4 p-4 rounded overflow-hidden">
                        <span class>Select Event Date and Time</span>
                        <input type="date" name="eventDate" className="pt-2 pb-2 pl-2 cursor-pointer"/>
                        <input type="time" name="eventTime" className="pt-2 pb-2 pr-2 cursor-pointer" />
                    </div> */}
                    

                    <label
                        className='mt-4 px-4 py-1 text-xl text-center rounded cursor-pointer bg-gray-400 hover:shadow-inner transform hover:scale-95 transition ease-out duration-300'
                        htmlFor="img">Upload Image</label>
                    <input
                        name="photo"
                        type='file'
                        accept='image/*'
                        id="img"
                        onChange={onSelectFile}
                        hidden
                    />

                    <button className='mt-4 px-4 py-2 text-xl text-center bg-white border-gray-500 border rounded cursor-pointer ' type="submit" placeholder="Add Event">Add Event</button>
                </form>
                <div className="w-full col-span-1">
                    <EventCard eventName={name} img={preview} description={description} dateTime={dateTime}/>
                </div>
            </div>
        </>
        

        // <div>
        //     {selectedFile && preview && <div> <img width={450} src={preview} alt={`Preview Image`}/></div>}
        //     <form onSubmit={handleSubmit} className={styles.eventForm}>
        //         <label htmlFor="name">Event name:</label>
        //         <input type="text" id="name" name="name" className={styles.formInput} placeholder={`Enter name of the event`} />
                
        //         <label htmlFor="location">Location:</label>
        //         <input type="text" id="location" name="location" className={styles.formInput} placeholder={`Choose location from drop down`} />

        //         <textarea name="description"
        //             placeholder="Description"
        //             value={description}
        //             onChange={(e) => { setDescription(e.target.value) }}
        //         ></textarea>

        //         <span className={styles.imageLabel}><label htmlFor="img">Upload Image</label></span>
        //         <input
        //             // className={styles.customFileInput}
        //             name="photo"
        //             type='file'
        //             accept='image/*'
        //             id="img"
        //             onChange={onSelectFile}
        //             hidden
        //         />
               
        //         <div>
        //             <button
        //                 className={styles.actionBtn}
        //                 type="submit"
        //             >{`Save`}</button>
        //             <button
        //                 className={styles.actionBtn}>
        //                 {`Cancel`}
        //             </button>
        //         </div>
        //     </form>
        // </div>
    )
}

export default EventForm
