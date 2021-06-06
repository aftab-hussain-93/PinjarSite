import LoginForm from '../components/LoginForm'
import styles from '../styles/Login.module.css'

import Meta from '../components/Meta'

const login = () => {
    return (
        <>
            <Meta title='Admin Login' />
            <div className={`container ${styles.loginContainer}`}>
                <LoginForm />
            </div>
        </>
    )
}

export default login
