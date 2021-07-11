import axios from 'axios'
import { useState } from 'react'
import Router from 'next/router'
import Meta from '../../../components/Meta'
import useSWR from 'swr'

const users = ({ userList }) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirm, setconfirm] = useState("")
    const [type, settype] = useState("audit")
    const [selectedFile, setSelectedFile] = useState(null)

    const { data, error } = useSWR('/api/user', (url) => fetch(url).then(r => r.json()))

    const updateReportType = (e) => {
        if (e.target.checked) {
            settype(e.target.value)
        }
    }

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

        const formData = new FormData();
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );
        formData.append('upload_preset', 'knfx6ule')

        // const res = await axios.post("https://api.cloudinary.com/v1_1/dthf9n79u/raw/upload", formData);

        console.log("File uploaded onto cloudinary")
        // console.log(res)
        // console.log(res.data)
        console.log("File upload done.....")

        const reportData = {
            title: selectedFile.name,
            type,
            // url: res.data.secure_url
        }

        try {
            // await axios.post(`/api/reports`, reportData)
            // Router.push(`/admin/reports`)
        } catch (error) {
            console.log(error)
            console.log("Could not upload new report")
            window.location.reload()
        }
    }


    

    if (data?.user) {
        return (
            <>
                <Meta title='Reports List' />
                <div className="w-full flex justify-between border-b border-primary pb-5">
                    <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary "> All Reports </span>
                </div>
                <div className="container mt-5">
                    <div className="container mt-5">
                        <div className="flex justify-center gap-10">
                            <h1 className="text-2xl font-semibold leading-normal capitalize text-gray-600 block">Upload New Report</h1>
                        </div>

                        <div className="max-w-md mx-auto bg-gray-50 rounded-lg overflow-hidden md:max-w-xl mt-5">
                            <form
                                className="flex col-span-1 lg:col-span-2 shadow-md border w-full flex-col justify-start sm:p-16 p-4 gap-5"
                                onSubmit={handleSubmit}
                                autoComplete="off"
                            >
                                <div>
                                    <span className="text-lg font-semibold">Report Type</span>
                                    <div className="mt-2">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio"
                                                name="userType"
                                                value="plan_progress"
                                                onChange={updateReportType}
                                                checked={type == "plan_progress"}
                                            />
                                            <span className="ml-2">Plan and Progress</span>
                                        </label>
                                        <label className="inline-flex items-center ml-6">
                                            <input
                                                type="radio"
                                                className="form-radio"
                                                name="userType"
                                                value="audit"
                                                onChange={updateReportType}
                                                checked={type == "audit"}
                                            />
                                            <span className="ml-2">Audit</span>
                                        </label>
                                        <label className="inline-flex items-center ml-6">
                                            <input
                                                type="radio"
                                                className="form-radio"
                                                name="userType"
                                                value="budget"
                                                onChange={updateReportType}
                                                checked={type == "budget"}
                                            />
                                            <span className="ml-2">Budget</span>
                                        </label>
                                    </div>
                                </div>
                                <div> <span className="text-lg font-semibold">Upload Report</span>
                                    <div className="relative h-32 rounded-lg border-dashed border-2  border-primary bg-gray-100 flex justify-center items-center">
                                        <div className="absolute">
                                            <div className="flex flex-col items-center"> <i className="fa fa-folder-open fa-3x text-primary"></i> <span className="block text-gray-400 font-normal">Upload Images here</span> </div>
                                        </div>
                                        <input
                                            type="file"
                                            className="h-full w-full opacity-0 cursor-pointer "
                                            name="report"
                                            accept=".doc, .docx, .pdf, .txt, .jpg, .png, .jpeg"
                                            onChange={onSelectFile}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mt-3 flex justify-end gap-5">
                                    <button
                                        onClick={() => { setAddEvent(false) }}
                                        className="hover:underline text-primary">
                                        <a href="/admin/reports">Cancel</a>
                                    </button>
                                    <button
                                        className="downloadBtn"
                                    >Upload</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </>
        )
    }
    if (data?.error) {
        Router.push('/')
    }
    if (error) {
        return <div>Failed to load. Please refresh and try again later...</div>
    }
    return <div>loading...</div>
    
}

export async function getServerSideProps(context) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL

    try {
        const { data: { users } } = await axios.get(`${url}/api/reports`)

        return {
            props: {
                userList: users || []
            }, // will be passed to the page component as props
        }
    } catch (error) {
        console.log("Errored out while getting users")
        console.log(error)
        return {
            props: {}
        }
    }
}

export default users