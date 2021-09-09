import { useState } from 'react'

import Meta from '../components/Meta'
import LoginForm from '../components/forms/LoginForm'

import { login as loginUser } from '../utils/auth'

const login = () => {

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
            await loginUser(userData)
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
                setCredential={setCredential}
                password={password}
                email={email}
            />
        </>
    )
}

export default login
