import { useState, useEffect } from 'react'
import axios from 'axios'
import Meta from '../../components/Meta'
import Image from 'next/image'


const aboutImages = ({ images }) => {
    const [preamble, setPreambleImage] = useState(null)
    const [shouhardBhavan, setshouhardBhavan] = useState(null)
    const [weddingHall, setweddingHall] = useState(null)
    const [college, setcollege] = useState(null)
    const [selectFile, setSelectedFile] = useState(null)
    const [fileType, setFileType] = useState(null)

    useEffect(() => {
        if (!selectFile) {
            setPreambleImage(undefined)
            setshouhardBhavan(undefined)
            setweddingHall(undefined)
            setcollege(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectFile)

        if (fileType == "preamble") {
            setshouhardBhavan(undefined)
            setweddingHall(undefined)
            setPreambleImage(objectUrl)
            setcollege(undefined)
        } else if (fileType == "fa_shouhard_bhavan") {
            setshouhardBhavan(objectUrl)
            setweddingHall(undefined)
            setPreambleImage(undefined)
            setcollege(undefined)
        } else if (fileType == "fa_wedding_hall") {
            setshouhardBhavan(undefined)
            setweddingHall(objectUrl)
            setPreambleImage(undefined)
            setcollege(undefined)
        } else {
            setshouhardBhavan(undefined)
            setweddingHall(undefined)
            setPreambleImage(undefined)
            setcollege(objectUrl)
        }      
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectFile, fileType])

    const onSelectFile = (e) => {        
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setFileType(e.target.name)
        setSelectedFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!selectFile) {
            console.log("No file selected")
            return
        }

        const formData = new FormData();
        // Update the formData object
        formData.append(
            "file",
            selectFile,
            selectFile.name
        );
        formData.append('upload_preset', 'knfx6ule')
        const res = await axios.post("https://api.cloudinary.com/v1_1/dthf9n79u/image/upload", formData);
        const imageData = {
            name: fileType,
            url: res.data.secure_url
        }
        const addImageUrl = process.env.NEXT_PUBLIC_SERVER_URL + '/api/images'
        await axios.post(`/api/images`, imageData);
        window.location.reload();
    }

    return (
        // <div className="container mt-10 grid grid-cols-2 gap-3">
        <div className="mt-8 grid lg:grid-cols-2 gap-10">
            <div className="col-span-1 my-3">
                <div className="flex flex-start gap-3">
                    <h1 className="text-1xl sm:text-2xl font-bold capitalize text-gray-600 block">Preamble Image</h1>
                    {preamble ?
                        (<div>
                            <button
                                onClick={() => {
                                    setSelectedFile(null)
                                    setPreambleImage(null)
                                }}
                                className="hover:underline text-primary">Cancel
                            </button>
                            <button
                                onClick={ handleSubmit }
                                className="ml-3 px-4 py-1 bg-gray-600 text-white font-semibold leading-relaxed rounded-lg hover:bg-opacity-30 hover:text-black"
                            >Apply</button>
                        </div>) :
                        (<label className="btn border-primary hover:bg-primary cursor-pointer border-2 hover:text-white">
                            <input
                                type="file"
                                className="h-full w-full cursor-pointer"
                                name="preamble"
                                accept='image/*'
                                id="img"
                                onChange={onSelectFile}
                                hidden
                            />
                            Upload Image
                        </label>)
                    }

                </div>
                <div className="py-7 px-10 h-70 w-auto border border-gray-400 mt-3">
                    <img
                        src={preamble ? preamble : images.preamble}
                        className="w-full h-40 sm:h-56 object-cover"
                        alt="Preamble Image"
                    />
                </div>
            </div>
            <div className="col-span-1 my-3">
                <div className="flex flex-start gap-3">
                    <h1 className="text-1xl sm:text-2xl font-bold capitalize text-gray-600 block">College Image</h1>
                    {college ?
                        (<div>
                            <button
                                onClick={() => {
                                    setSelectedFile(null)
                                    setcollege(null)
                                }}
                                className="hover:underline text-primary">Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="ml-3 px-4 py-1 bg-gray-600 text-white font-semibold leading-relaxed rounded-lg hover:bg-opacity-30 hover:text-black"
                            >Apply</button>
                        </div>) :
                        (<label className="btn border-primary hover:bg-primary cursor-pointer border-2 hover:text-white">
                            <input
                                type="file"
                                className="h-full w-full cursor-pointer"
                                name="fa_college"
                                accept='image/*'
                                id="img"
                                onChange={onSelectFile}
                                hidden
                            />
                            Upload Image
                        </label>)
                    }

                </div>
                <div className="py-7 px-10 h-70 w-auto border border-gray-400 mt-3">
                    <img
                        src={college ? college : images.fa_college}
                        className="w-full h-40 sm:h-56 object-cover"
                        alt="College Image"
                    />
                </div>
            </div>

            <div className="col-span-1 my-3">
                <div className="flex flex-start gap-3">
                    <h1 className="text-1xl sm:text-2xl font-bold capitalize text-gray-600 block">Shouhard Bhavan</h1>
                    {shouhardBhavan ?
                        (<div>
                            <button
                                onClick={() => {
                                    setSelectedFile(null)
                                    setshouhardBhavan(null)
                                }}
                                className="hover:underline text-primary">Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="ml-3 px-4 py-1 bg-gray-600 text-white font-semibold leading-relaxed rounded-lg hover:bg-opacity-30 hover:text-black"
                            >Apply</button>
                        </div>) :
                        (<label className="btn border-primary hover:bg-primary cursor-pointer border-2 hover:text-white">
                            <input
                                type="file"
                                className="h-full w-full cursor-pointer"
                                name="fa_shouhard_bhavan"
                                accept='image/*'
                                id="img"
                                onChange={onSelectFile}
                                hidden
                            />
                            Upload Image
                        </label>)
                    }

                </div>
                <div className="py-7 px-10 h-70 w-auto border border-gray-400 mt-3">
                    <img
                        src={shouhardBhavan ? shouhardBhavan : images.fa_shouhard_bhavan}
                        className="w-full object-cover h-40 sm:h-56 rounded-lg overflow-hidden"
                        alt="Shouhard Bhavan Image"
                    />
                </div>
            </div>

            <div className="col-span-1 my-3">
                <div className="flex flex-start gap-3">
                    <h1 className="text-1xl sm:text-2xl font-bold capitalize text-gray-600 block">Shadi Mahal Image</h1>
                    {weddingHall ?
                        (<div>
                            <button
                                onClick={() => {
                                    setSelectedFile(null)
                                    setweddingHall(null)
                                }}
                                className="hover:underline text-primary">Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="ml-3 px-4 py-1 bg-gray-600 text-white font-semibold leading-relaxed rounded-lg hover:bg-opacity-30 hover:text-black"
                            >Apply</button>
                        </div>) :
                        (<label className="btn border-primary hover:bg-primary cursor-pointer border-2 hover:text-white">
                            <input
                                type="file"
                                className="h-full w-full cursor-pointer"
                                name="fa_wedding_hall"
                                accept='image/*'
                                id="img"
                                onChange={onSelectFile}
                                hidden
                            />
                            Upload Image
                        </label>)
                    }

                </div>
                <div className="py-7 px-10 h-70 w-auto border border-gray-400 mt-3">
                    <img
                        src={weddingHall ? weddingHall : images.fa_wedding_hall}
                        className="w-full object-cover h-40 sm:h-56 rounded-lg overflow-hidden"
                        alt="Shaadi Mahal Image"
                    />
                </div>
            </div>

        </div>
    )
}

export default aboutImages
