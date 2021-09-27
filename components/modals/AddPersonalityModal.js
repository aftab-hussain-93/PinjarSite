import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Formik, Field } from 'formik'

Modal.setAppElement('body')

const AddPersonalityModal = ({ showModal, closeModal, submitHandler }) => {
    const [preview, setPreview] = useState()
    const [selectedFile, setSelectedFile] = useState(null);

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

    const onSubmit = async (values, { setSubmitting }) => {
        submitHandler({...values, file: selectedFile})
        setSubmitting(false);
        setSelectedFile(null)
        closeModal()
    }

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
                <h1 className="text-center text-2xl  text-gray-600 font-bold">Add Personality</h1>

                <Formik
                    initialValues={{ fullName: "", designation: "", file: null }}
                    validate={values => {
                        const errors = {};
                        if (!values.fullName) {
                            errors.fullName = 'Required';
                        }  else if (!values.designation) {
                            errors.designation = 'Required';
                        } else if (!selectedFile) {
                            errors.file = 'Required'
                        } 
                        return errors;
                    }}
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-start items-start flex-col mb-2">
                                <label
                                    className="text-md font-semibold"
                                    htmlFor="fullName">Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullName}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + ((errors.fullName && touched.fullName && errors.fullName) ? "border-red-300 focus:border-red-500" : "focus:border-primary")}
                                />
                                <span className="text-sm text-red-500">{errors.fullName && touched.fullName && errors.fullName}</span>
                            </div>

                            <div className="flex justify-start items-start flex-col mb-2">
                                <label
                                    className="text-md font-semibold"
                                    htmlFor="designation">Occupation</label>
                                <input
                                    type="text"
                                    name="designation"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.designation}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + ((errors.designation && touched.designation && errors.designation) ? "border-red-300 focus:border-red-500" : "focus:border-primary")}
                                />
                                <span className="text-sm text-red-500">{errors.designation && touched.designation && errors.designation}</span>
                            </div>

                            <div>
                                <span className="text-md font-semibold">Upload Photo</span>
                                <div className="relative h-32 rounded-lg border-dashed border-2  bg-gray-100 flex justify-center items-center">
                                    <div className="absolute">
                                        <div className="flex flex-col items-center">
                                            <i className="fa fa-folder-open fa-3x text-primary"></i>
                                            <span className="block text-gray-400 font-normal">Upload Images here</span>
                                        </div>
                                    </div>
                                    <input
                                        type="file"
                                        className={"h-full w-full opacity-0 cursor-pointer" + ((errors.file && touched.file && errors.file) ? "border-red-300 focus:border-red-500" : "focus:border-primary")}
                                        name="photo"
                                        accept='image/*'
                                        id="img"
                                        onChange={onSelectFile}
                                        required
                                    />
                                </div>
                                <span className="text-sm text-red-500">{errors.file && touched.file && errors.file}</span>
                                {preview &&
                                    <img
                                        src={preview}
                                        className="pt-4 w-auto rounded-t-xl h-40 sm:h-56"
                                    />
                                }
                            </div>
      
                            <div className="mt-3 flex justify-end gap-5">
                                <button
                                    className="hover:underline text-primary"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="downloadBtn"
                                >Create</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </Modal>
    )
}

export default AddPersonalityModal
