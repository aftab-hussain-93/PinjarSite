import { useState } from 'react'
import Router from 'next/router'

import Meta from '../components/Meta'
import LoginForm from '../components/forms/LoginForm'
import Alert from '../components/Alerts/alert'
// SWR Hooks
import { useProfile, login as userLogin } from '../utils/auth';

const login = () => {
    const { mutate } = useProfile()
    const [{ show, message, type: alertType }, setalert] = useState({ show: false, message: "", type: "info" })
    const [{ email, password }, setCredential] = useState({ email: "", password: "" })
    const [credentialError, setCredentialError] = useState({ email: false, password: false })
    

    const showAlertWithMessage = (message, type) => {
        setalert({ show: true, message, type })
    }

    const closeAlertBox = () => {
        setalert({ show: false, message: "", type: "info" })
    }

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
            const { status, error} = await userLogin(userData)
            if (error || status !== 200) throw new Error(error)
            // Login Successful
            mutate()
            Router.push('/admin/events')
        } catch (error) {
            showAlertWithMessage(`Errored out during login. Please try again later.`, 'error')
            console.error(error)
            console.error("Could not login")
            setCredentialError({ email: true, password: true })
        }
    }

    return (
        <>
            <Meta title='Admin Login' />
            <Alert message={message} showAlert={show} closeAlertBox={closeAlertBox} type={alertType} />
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
