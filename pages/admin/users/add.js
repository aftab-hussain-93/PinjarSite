import { useState } from 'react'
import Router from 'next/router'

import { apiUrl } from '../../../config/api.config'

import Meta from '../../../components/Meta'
import AddUser from '../../../components/forms/AddUser'

const users = ({ userList }) => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("Inside handle submit")

        if (!email || email.trim() == "") {
            updateFormError("email",true)
            return
        }
        if (!first || first.trim() == "") {
            updateFormError("first", true)
            return
        }
        if (!last || last.trim() == "") {
            updateFormError("last", true)
            return
        }
        if (!password || password.trim() == "" || !confirm || confirm.trim() == "" || confirm != password) {
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
            if (res.status === "ok") {
                Router.push('/admin/users')
            } else if (res.status === "user") {
                setInUseError(true)
                return;
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <Meta title='User Management' />
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