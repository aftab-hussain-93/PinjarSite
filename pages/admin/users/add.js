import { useState } from 'react'
import Router from 'next/router'

import { apiUrl } from '../../../config/api.config'

import Meta from '../../../components/Meta'
import AddUser from '../../../components/forms/AddUser'
import Alert from '../../../components/Alerts/alert'

const users = () => {
    const [{ show, message, type: alertType }, setalert] = useState({ show: false, message: "", type: "info" })
    const [formValues, setFormValue] = useState({ first: "", last: "", email: "", password: "", confirm: "", type: "email", isAdmin: false })
    const [formError, setformError] = useState({ first: false, last: false, email: false, password: false, confirm: false })
    const [inUseError, setInUseError] = useState(false)

    const { first, last, email, password, confirm, type, isAdmin } = formValues 

    const updateFormError = (key, val) => {
        setformError(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    const showAlertWithMessage = (message, type) => {
        setalert({ show: true, message, type })
    }

    const closeAlertBox = () => {
        setalert({ show: false, message: "", type: "info" })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || email.trim() == "") {
            updateFormError("email", true)
            showAlertWithMessage('Enter valid email', 'error')
            return
        }
        if (!first || first.trim() == "") {
            showAlertWithMessage('Enter valid first name', 'error')
            updateFormError("first", true)
            return
        }
        if (!last || last.trim() == "") {
            showAlertWithMessage('Enter valid last name', 'error')
            updateFormError("last", true)
            return
        }
        if (!password || password.trim() == "" || !confirm || confirm.trim() == "" || confirm != password) {
            showAlertWithMessage('Enter valid password', 'error')
            updateFormError("password", true)
            updateFormError("confirm", true)
            return
        }
        
        const newUser = {
            firstName: first,
            lastName: last,
            password,
            email,
            isAdmin,
            type
        }
        
        try {
            const res = await fetch(`${apiUrl}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser),
                credentials: "include"
            }).then(resp => resp.json())

            if (res.status === 201) {
                showAlertWithMessage('User created successfully', 'success')
                setTimeout(() => {
                    Router.push('/admin/users')
                }, 500)
            } else if (res.status === 400 && res.error === "already_exists") {
                showAlertWithMessage('User already exists', 'error')
                setInUseError(true)
                return;
            } else {
                showAlertWithMessage('Unexpected error. Could not create user. Please try again later.', 'error')
            }
        } catch (e) {
            console.error(e)
            showAlertWithMessage('Unexpected error. Could not create user. Please try again later.', 'error')
        }
    }

    return (
        <>
            <Meta title='User Management' />
            <Alert message={message} showAlert={show} closeAlertBox={closeAlertBox} type={alertType} />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary ">User Management</span>
            </div>
            <div className="container mt-5">
                <div className="container mt-5">
                    <div className="flex justify-center gap-10">
                        <h1 className="text-2xl font-semibold leading-normal capitalize text-gray-600 block">Create New User</h1>
                    </div>
                    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl mt-5">
                        <AddUser
                            formValues={formValues}
                            setFormValue={setFormValue}
                            formError={formError}
                            setformError={setformError}
                            handleSubmit={handleSubmit}
                            inUseError={inUseError}
                            setInUseError={setInUseError}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default users