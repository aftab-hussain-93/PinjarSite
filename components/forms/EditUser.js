import Router from 'next/router'
import React, { useState } from 'react'
import { apiUrl } from '../../config/api.config'
import Alert from '../Alerts/alert'

const EditUser = ({
    userDetails: { firstName, lastName, email: userEmail, isAdmin: userAdminStatus },
    userId
}) => {
    const [{ show, message, type: alertType }, setalert] = useState({ show: false, message: "", type: "info" })
    const [{ first, last, email, isAdmin, password, confirm }, setFormValue] = useState({ first: firstName, last: lastName, email: userEmail, isAdmin: userAdminStatus, password:"", confirm: "" })
    const [isPasswordUpdate, updatePassword] = useState(false)
    const [{ first: fNameError, last: lNameError, password: passwordError, confirm: confirmError }, setFormError] = useState({ first: false, last: false, password: false, confirm: false })
    
    const updateFormVal = (key, val) => {
        setFormValue(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    const updateFormError = (key, val) => {
        setFormError(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    const updateUserRole = (e) => {
        if (e.target.checked) {
            let val;
            if (e.target.value == "admin") val = true
            else val = false
            updateFormVal("isAdmin", val)
        }
    }

    const showAlertWithMessage = (message, type) => {
        setalert({ show: true, message, type })
    }

    const closeAlertBox = () => {
        setalert({ show: false, message: "", type: "info" })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userUpdatedValues = {}
        if (firstName !== first) {
            if (!first || first.trim() == "") {
                showAlertWithMessage('Enter valid first name', 'error')
                updateFormError("first", true)
                return
            }
            userUpdatedValues.firstName = first
        }
        if (lastName !== last) {
            if (!last || last.trim() == "") {
                showAlertWithMessage('Enter valid last name', 'error')
                updateFormError("last", true)
                return
            }
            userUpdatedValues.lastName = last
        }
        if (userAdminStatus !== isAdmin) {
            userUpdatedValues.isAdmin = isAdmin
        }
        if (isPasswordUpdate) {
            if (!password || password.trim() == "" || !confirm || confirm.trim() == "" || confirm != password) {
                showAlertWithMessage('Enter valid password', 'error')
                updateFormError("password", true)
                updateFormError("confirm", true)
                return
            }
            userUpdatedValues.password = password
        }

        try {
            const res = await fetch(`${apiUrl}/users/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userUpdatedValues),
                credentials: "include"
            }).then(resp => resp.json())

            if (res.status === 200) {
                Router.push('/admin/users')
            } else {
                showAlertWithMessage('Unexpected error. Could not edit user. Please try again later.', 'error')
            }
        } catch (e) {
            console.error(e)
            showAlertWithMessage('Unexpected error. Could not edit user. Please try again later.', 'error')
        }
    }
    
    return (
        <>
            <Alert message={message} showAlert={show} closeAlertBox={closeAlertBox} type={alertType} />
            <form
                className="flex col-span-1 lg:col-span-2 shadow-md border w-full flex-col justify-start sm:p-16 p-4 gap-5"
                onSubmit={handleSubmit}
            >
                <div>
                    <span className="text-md font-semibold">User Type</span>
                    <div className="mt-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="isAdmin"
                                value="default"
                                onChange={updateUserRole}
                                checked={!isAdmin}
                            />
                            <span className="ml-2">Default</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input
                                type="radio"
                                className="form-radio"
                                name="isAdmin"
                                value="admin"
                                onChange={updateUserRole}
                                checked={isAdmin}
                            />
                            <span className="ml-2">Admin</span>
                        </label>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <span className="text-md font-semibold">First Name</span>
                        {fNameError && <span className="text-sm text-red-500">* Invalid</span>}
                    </div>
                    <input
                        type="text"
                        maxLength="30"
                        name="first"
                        onChange={(e) => {
                            updateFormError("first", false)
                            updateFormVal("first", e.target.value)
                        }}
                        value={first}
                        className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (fNameError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                        required
                    />
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <span className="text-md font-semibold">Last Name</span>
                        {lNameError && <span className="text-sm text-red-500">* Invalid</span>}
                    </div>
                    <input
                        type="text"
                        maxLength="30"
                        name="last"
                        onChange={(e) => {
                            updateFormError("last", false)
                            updateFormVal("last", e.target.value)
                        }}
                        value={last}
                        className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (lNameError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                        required
                    />
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <span className="text-md font-semibold">Email</span>
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        className={"h-10 px-3 w-full border-2 focus:outline-none rounded focus:border-primary"}
                        disabled
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center">
                        <span className="text-md font-semibold">New Password</span>
                        {passwordError && <span className="text-sm text-red-500">* Invalid</span>}
                    </div>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => {
                            updateFormError("password", false)
                            updateFormVal("password", e.target.value)
                            if (e.target.value.trim() == "") {
                                updatePassword(false)
                            } else {
                                updatePassword(true)
                            }
                        }}
                        minLength="8"
                        value={password}
                        className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (passwordError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                        autoComplete="new-password"
                    />
                </div>
                {isPasswordUpdate ? (<div>
                    <div className="flex justify-between items-center">
                        <span className="text-md font-semibold">Confirm New Password</span>
                        {confirmError && <span className="text-sm text-red-500">* Invalid</span>}
                    </div>
                    <input
                        type="password"
                        name="confirm"
                        onChange={(e) => {
                            updateFormError("confirm", false)
                            updateFormVal("confirm", e.target.value)
                        }}
                        minLength="8"
                        value={confirm}
                        className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (confirmError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                        autoComplete="new-password"
                    />
                </div>) : null}

                <div className="mt-3 flex justify-end gap-5">
                    <button
                        className="hover:underline text-primary">
                        <a href="/admin/users">Cancel</a>
                    </button>
                    <button
                        className="downloadBtn"
                    >Save</button>
                </div>
            </form>
        </>

    )
}

export default EditUser
