import React from 'react'
import Modal from 'react-modal'


Modal.setAppElement('body')

const AddReportModal = ({ showModal, closeModal, submitHandler, setFileType, setSelectedFile, selectedFile, fileType, fileName }) => {

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            return setSelectedFile(null)
        }
        return setSelectedFile(e.target.files[0])
    }

    return (
        <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(88, 88, 88, 0.80)'
                }
            }}
            className="w-screen md:w-2/3 lg:w-1/3 mx-auto bg-white border border-gray-300 overflow-y-auto overflow-x-hidden p-2 mt-6"
            contentLabel="Add Report"
        >
            <div className="flex col-span-1 lg:col-span-2 shadow-md border w-full flex-col justify-start sm:p-16 p-4 gap-5 text-gray-500">
                <h1 className="text-center text-2xl  text-gray-600 font-bold">Upload new report</h1>
                <form onSubmit={submitHandler}>
                    <div className="pb-4">
                        <span className="text-md font-semibold">Report Type</span>
                        <div className="mt-2">
                            <label className="items-center">
                                <input
                                    type="radio"
                                    name="fileType"
                                    value="audit"
                                    onChange={() => { setFileType("audit") }}
                                    checked={fileType === "audit"}
                                />
                                <span className="ml-2">Audit</span>
                            </label>
                            <label className="items-center ml-6">
                                <input
                                    type="radio"
                                    name="fileType"
                                    value="plan"
                                    onChange={() => { setFileType("plan") }}
                                    checked={fileType === "plan"}
                                />
                                <span className="ml-2">Plan &amp; Progress</span>
                            </label>
                            <label className="items-center ml-6">
                                <input
                                    type="radio"
                                    name="fileType"
                                    value="budget"
                                    onChange={() => { setFileType("budget") }}
                                    checked={fileType === "budget"}
                                />
                                <span className="ml-2">Budget</span>
                            </label>
                        </div>
                    </div>
                    <div className="pb-2">
                        <div className="relative h-32 rounded-lg border-dashed border-2  bg-gray-100 flex justify-center items-center">
                            <div className="absolute">
                                <div className="flex flex-col items-center">
                                    <i className="fa fa-folder-open fa-3x text-primary"></i>
                                    <span className="block text-gray-400 font-normal">Upload Report here</span>
                                </div>
                            </div>
                            <input
                                type="file"
                                className="h-full w-full opacity-0 cursor-pointer"
                                name="file"
                                accept='.pdf,.doc,.docx,.xls,.xlsx,.png,.jpeg,.jpg'
                                id="file"
                                onChange={onSelectFile}
                                required
                            />
                        </div>
                        {selectedFile && <span>{fileName}</span>}
                    </div>
                    <div className="mt-3 flex justify-end gap-5">
                        <button
                            onClick={closeModal}
                            className="hover:underline text-primary">Cancel
                        </button>
                        <button
                            type="submit"
                            className="downloadBtn"
                        >Create</button>
                    </div>
                </form>
                
            </div>
        </Modal>
    )
}

export default AddReportModal
