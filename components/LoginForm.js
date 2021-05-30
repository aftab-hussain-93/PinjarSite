import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import { loginUser } from '../lib/auth'
import Router from 'next/router';

const LoginForm = () => {
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { token, error } = await loginUser(email, password)
        if (error) {
            setLoginError(error.message)
        } else {
            // Token is valid
            Router.push('/')
        }
    }

    return (
        <form className={styles.loginWrapper} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className={styles.formLabel}>
                <label>{'Email Address'}</label>
            </div>
            <div>
                <input type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.formLabel}>
                <label>{'Password'}</label>
            </div>
            <div>
                <input type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.formLabel}>
                <button type="submit">{`Submit`}</button>
                {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            </div>

        </form>
    )
}

export default LoginForm
