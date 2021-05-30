import LoginForm from '../components/LoginForm'
import styles from '../styles/Login.module.css'

const login = () => {
    return (
        <div className={`container ${styles.loginContainer}`}>
            <LoginForm />
        </div>
    )
}

export default login
