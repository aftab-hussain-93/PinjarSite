import React from 'react'
import Modal from 'react-modal'
import { Formik, Field } from 'formik'


Modal.setAppElement('body')

const AddUserModal = ({ showModal, closeModal, userId, firstName = "", lastName = "", password = "", email = "", role = "default", modalState, createHandler, editHandler }) => {
    const onSubmit = async (values, { setSubmitting }) => {
        if (modalState === "create") {
            createHandler({ ...values })
        } else {
            editHandler({ ...values, userId })
        }
        setSubmitting(false);
        closeModal()
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
            contentLabel="Add User"
        >
            <div className="flex col-span-1 lg:col-span-2 shadow-md border w-full flex-col justify-start sm:p-16 p-4 gap-5 text-gray-500">
                <h1 className="text-center text-2xl  text-gray-600 font-bold">{modalState === "create" ? `Add New User` : `Edit User` }</h1>
                <Formik
                    initialValues={{ firstName, lastName, email, password, confirm: "", role}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        } else if (!values.firstName) {
                            errors.firstName = 'Required';
                        } else if (!values.lastName) {
                            errors.lastName = 'Required';
                        } else if (!values.password && modalState==="create") {
                            errors.password = 'Required';
                        } else if (!values.confirm && modalState === "create") {
                            errors.confirm = 'Required';
                        } else if (values.confirm !== values.password) {
                            errors.confirm = 'Passwords not matching';
                            errors.password = 'Passwords not matching';
                        } else if (values.email && (values.email != email) && modalState === "edit") {
                            errors.email = 'Cannot update email address';
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
                            <div>
                                <span className="text-md font-semibold">User Type</span>
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <Field
                                            type="radio"
                                            className="form-radio"
                                            name="role"
                                            value="default"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <span className="ml-2">Default</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <Field
                                            type="radio"
                                            className="form-radio"
                                            name="role"
                                            value="admin"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <span className="ml-2">Admin</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-start items-start flex-col mb-2">
                                <label
                                    className="text-md font-semibold"
                                    htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + ((errors.email && touched.email && errors.email) ? "border-red-300 focus:border-red-500" : "focus:border-primary")}
                                    disabled={modalState === "edit"}
                                />
                                <span className="text-sm text-red-500">{errors.email && touched.email && errors.email}</span>
                            </div>
                            <div className="flex justify-center items-start flex-col mb-2">
                                <label
                                    className="text-md font-semibold"
                                    htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + ((errors.firstName && touched.firstName && errors.firstName) ? "border-red-300 focus:border-red-500" : "focus:border-primary")}
                                />
                                <span className="text-sm text-red-500">{errors.firstName && touched.firstName && errors.firstName}</span>
                            </div>
                            <div className="flex justify-start items-start flex-col mb-2">
                                <label
                                    className="text-md font-semibold"
                                    htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + ((errors.lastName && touched.lastName && errors.lastName) ? "border-red-300 focus:border-red-500" : "focus:border-primary")}
                                />
                                <span className="text-sm text-red-500">{errors.lastName && touched.lastName && errors.lastName}</span>
                            </div>
                            <div className="flex justify-start items-start flex-col mb-2">
                                <label
                                    className="text-md font-semibold"
                                    htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + ((errors.password && touched.password && errors.password) ? "border-red-300 focus:border-red-500" : "focus:border-primary")}
                                />
                                <span className="text-sm text-red-500">{errors.password && touched.password && errors.password}</span>
                            </div>
                            <div className="flex justify-start items-start flex-col mb-2">
                                <label
                                    className="text-md font-semibold"
                                    htmlFor="confirm">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirm"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirm}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + ((errors.confirm && touched.confirm && errors.confirm) ? "border-red-300 focus:border-red-500" : "focus:border-primary")}
                                />
                                <span className="text-sm text-red-500">{errors.confirm && touched.confirm && errors.confirm}</span>
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
                                >{modalState === "create" ? `Create` : `Edit`}</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </Modal>
    )
}

export default AddUserModal
