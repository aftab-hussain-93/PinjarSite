import { useState } from 'react'

import Meta from '../components/Meta'
import LoginForm from '../components/forms/LoginForm'

import { login as loginUser } from '../utils/auth'
import Router from 'next/router'
// SWR Hooks
import { useProfile } from '../utils/auth';

const login = () => {
    const { mutate } = useProfile()
    const [{ email, password }, setCredential] = useState({ email: "", password: "" })
    const [credentialError, setCredentialError] = useState({ email: false, password: false })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || email.trim() == "") {
            setCredentialError(prevState => ({...prevState, email: true}))        
            return
        }
        if (!password || password.trim() == "") {
            setCredentialError(prevState => ({ ...prevState, password: true }))
            return
        }

        const userData = {
            email,
            password
        }
        try {
            const { status, error } = await loginUser(userData)
            if (status == "ok") {
                mutate()
                Router.push('/admin/dashboard')
            }
            else throw new Error(error)
        } catch (error) {
            console.error(error)
            console.error("Could not login")
            setCredentialError({ email: true, password: true })
        }
    }

    return (
        <>
            <Meta title='Admin Login' />

            <div
                className="absolute top-0 w-full h-full bg-gray-900"
            ></div>
            <LoginForm
                handleSubmit={handleSubmit}
                credentialError={credentialError}
                setCredentialError={setCredentialError}
                setCredential={setCredential}
                password={password}
                email={email}
            />
        </>
    )
}

export default login
