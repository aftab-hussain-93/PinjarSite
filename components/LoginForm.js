import styles from '../styles/Login.module.css'

const LoginForm = () => {
    return (
        <div className={styles.loginWrapper}>
            <h1>Log in</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
