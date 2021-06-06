import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Router from 'next/router';

import styles from '../../styles/admin/EventForm.module.css'

const EventForm = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

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
        const { token, error } = await loginUser(email, password)
        if (error) {
            setLoginError(error.message)
        } else {
            // Token is valid
            Router.push('/admin/dashboard')
        }
    }


    return (
        <div className={`container`}>
            <div className={styles.headingSection}>
                <h2>New Event</h2>
            </div>
            {selectedFile && preview && <div> <img width={450} src={preview} alt={`Preview Image`}/></div>}
            <form onSubmit={handleSubmit} className={styles.eventForm}>
                <label htmlFor="name">Event name:</label>
                <input type="text" id="name" name="name" className={styles.formInput} placeholder={`Enter name of the event`} />
                
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" className={styles.formInput} placeholder={`Choose location from drop down`} />

                <textarea name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                ></textarea>

                <span className={styles.imageLabel}><label htmlFor="img">Upload Image</label></span>
                <input
                    // className={styles.customFileInput}
                    name="photo"
                    type='file'
                    accept='image/*'
                    id="img"
                    onChange={onSelectFile}
                    hidden
                />
               
                <div>
                    <button
                        className={styles.actionBtn}
                        type="submit"
                    >{`Save`}</button>
                    <button
                        className={styles.actionBtn}>
                        {`Cancel`}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EventForm
