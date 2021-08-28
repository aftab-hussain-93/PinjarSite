import { useState, useEffect } from 'react'
import axios from 'axios'
import Meta from '../../components/Meta'
import Image from 'next/image'


const images = ({ images }) => {
    const [banner, setBanner] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)

    useEffect(() => {
        if (!selectedFile) {
            setBanner(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setBanner(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectBanner = (e) => {
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

        const formData = new FormData();
        // Update the formData object
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );
        formData.append('upload_preset', 'knfx6ule')
        const res = await axios.post("https://api.cloudinary.com/v1_1/dthf9n79u/image/upload", formData);
        const imageData = {
            name:"banner",
            url: res.data.secure_url
        }
        const addImageUrl = process.env.NEXT_PUBLIC_SERVER_URL + '/api/images'
        await axios.post(`/api/images`, imageData);
        window.location.reload();
    }

    return (
        <div className="container mt-5">
            <div className="flex flex-start gap-10">
                <h1 className="text-1xl sm:text-2xl font-bold capitalize text-gray-600 block">Banner</h1>
                {banner ?
                    (<div>
                        <button
                            onClick={() => {
                                setSelectedFile(null)
                                setBanner(null)
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
                            name="photo"
                            accept='image/*'
                            id="img"
                            onChange={onSelectBanner}
                            hidden
                        />
                        Upload
                    </label>)
                }

            </div>
            <div className="p-10 border border-gray-400 mt-3 w-full h-heroHeight">
                <img
                    src={banner ? banner : images.banner}
                    className="w-full h-full"
                    alt="Pinjar Image"
                />
            </div>
        </div>
    )
}

export default images
