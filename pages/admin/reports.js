import { useState, useEffect } from 'react'
import Router from 'next/router'
// Components
import Meta from '../../components/Meta'
import FullPageLoader from '../../components/Loaders/FullPageLoader'
import Alert from '../../components/Alerts/alert'
import AddReportModal from '../../components/modals/AddReportModal'
// Config
import { apiUrl, reportsDir } from '../../config/api.config'
// Helpers
import { useProfile } from '../../utils/auth'
import { useReports } from '../../utils/reportUtils'
import { formatFullDate } from '../../utils/dateUtils'

const setHidden = () => { // Hiding scroll bar when modal is open
    if (document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }
}

const reports = () => {
    const [{ show, message, type }, setalert] = useState({ show: false, message: "", type: "info" })
    const [showModal, setShowModal] = useState(false);
    const [fileType, setFileType] = useState("audit");
    const [fileName, setFileName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const { user: loggedInUser, isLoading, isError } = useProfile()
    const { reports, isLoading: usersLoading, isError: reportError, mutate } = useReports()

    useEffect(() => {
        if (selectedFile) {
            setFileName(selectedFile.name)
        } else {
            setFileName("")
        }
    }, [selectedFile])

    if (isError || reportError) Router.push('/')
    if (!loggedInUser.isAdmin) Router.push('/admin/events')
    if (usersLoading || isLoading) return (<FullPageLoader />)

    const showAlertWithMessage = (message, type) => {
        setalert({ show: true, message, type })
    }

    const closeAlertBox = () => {
        setalert({ show: false, message: "", type: "info" })
    }

    const closeModal = () => {
        setShowModal(false)
        setHidden()
        setSelectedFile(null)
    }

    const openModal = () => {
        setShowModal(true)
        setHidden()
    }

    const deleteReport = async (reportId) => {
        try {
            const resp = await fetch(`${apiUrl}/reports/delete/${reportId}`, { credentials: "include" })
            const { status, message } = await resp.json()
            if (status === 200) {
                showAlertWithMessage(message, 'success')
            } else {
                showAlertWithMessage(message, 'error')
            }
        } catch (e) {
            showAlertWithMessage(`Could not delete event. Please try again later.`, 'error')
        }
        mutate()
    }

    const createReport = async (e) => {
        e.preventDefault()
        if (!selectedFile) {
            showAlertWithMessage('Please upload a report', 'error')
            return
        }

        if (!fileType) {
            showAlertWithMessage('Please select a report type', 'error')
            return
        }

        closeModal()

        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );

        formData.append('fileType', fileType)

        try {            
            const resp = await fetch(`${apiUrl}/reports`, {
                method: 'POST',
                body: formData,
                credentials: "include"
            })
            if (resp.status === 201) {                
                mutate()
                showAlertWithMessage('Report uploaded successfully', 'success')
            } else {
                throw new Error(`Could not upload report.`)
            }
        } catch (e) {
            showAlertWithMessage('Could not upload report, please try again later.', 'error')
        }
    }

    return (
        <>
            <Meta title='Report Management' />
            <Alert message={message} showAlert={show} closeAlertBox={closeAlertBox} type={type} />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary ">Report Management</span>
            </div>
            <div className="container mt-5">
                <div className="container mt-5">
                    <div className="flex flex-start gap-10">
                        <h1 className="text-2xl font-semibold leading-normal capitalize text-gray-600 block">Report List</h1>
                        <button
                            onClick={() => {
                                openModal()
                            }}
                            className="rounded py-1 px-2  sm:py-1 sm:px-2 font-normal capitalize cursor-pointer tracking-tight sm:tracking-wide hover:bg-white hover:text-primary border-primary border bg-primary text-white">
                            Add Report
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-5 pl-2 pr-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Report Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Report Type
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Upload Date
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">View</span>
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        reports && reports.map(({ id, fileType, fileName, originalName, filePath, createdAt }, key) => {
                                            let reportType = "Plan & Progress"
                                            if (fileType === "audit") {
                                                reportType = 'Audit'
                                            } else if (fileType === "budget") {
                                                reportType = "Budget"
                                            }
                                            const creationDate = formatFullDate(createdAt)
                                            const path = `${reportsDir}${fileName}`

                                            return (
                                                <tr key={key}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {originalName}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{reportType}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{creationDate}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <a className="text-sm leading-snug tracking-tight font-medium hover:underline hover:text-primary"
                                                            title={originalName}
                                                            href={path}
                                                            target="_blank"
                                                        >View</a>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button onClick={() => { deleteReport(id) }} className="text-primary hover:text-black">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <AddReportModal
                showModal={showModal}
                closeModal={closeModal}
                submitHandler={createReport}
                setFileType={setFileType}
                setSelectedFile={setSelectedFile}
                fileType={fileType}
                fileName={fileName}
                selectedFile={selectedFile}
            />
        </>
    )
}

export default reports