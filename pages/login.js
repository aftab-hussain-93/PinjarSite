// import LoginForm from '../components/LoginForm'
import Router from 'next/router'
import { useState } from 'react'

import Meta from '../components/Meta'
import axios from 'axios'
import withSession from '../utils/session'

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [credentialError, setcredentialError] = useState(false)
    const inputStyle = "border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
    const errorInput = "border-2 border-red-600 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || email.trim() == "") {
            console.log("Enter email")
            setcredentialError(true)
            return
        }
        if (!password || password.trim() == "") {
            console.log("Enter password")
            setcredentialError(true)
            return
        }

        const userData = {
            email,
            password
        }
        try {
            const data = await axios.post('/api/login', userData);
            window.location.reload();
        } catch (error) {
            console.log(error)
            console.log("Could not login")
            setcredentialError(true)
        }
    }

    return (
        <>
            <Meta title='Admin Login' />
            {/* <div className={`container ${styles.loginContainer}`}>
                <LoginForm />
            </div> */}
            <div
                className="absolute top-0 w-full h-full bg-gray-900"
                // style={{
                //     backgroundImage:
                //         "url(" + require("assets/img/register_bg_2.png").default + ")",
                //     backgroundSize: "100%",
                //     backgroundRepeat: "no-repeat"
                // }}
            ></div>
            <div className="container mx-auto px-4 h-screen">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            {/* <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-gray-600 text-sm font-bold">
                                        Sign in with
                                    </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <button
                                        className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                    >
                                         <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={require("assets/img/github.svg").default}
                                        /> 
                                        Facebook
                                    </button>
                                    <button
                                        className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                    >
                                         <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={require("assets/img/google.svg").default}
                                        /> 
                                        Google
                                    </button>
                                </div>
                                <hr className="mt-6 border-b-1 border-gray-400" />
                            </div> */}
                            <div className="flex-auto px-4 lg:px-10 py-10 ">
                                <div className="text-gray-500 text-center mb-3 font-bold text-xl">
                                    Sign in with your credentials
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="relative w-full mb-3">
                                        <div className="flex justify-between">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Email
                                            </label>
                                            {credentialError && <span className="block capitalize text-red-600 text-xs font-semibold mb-2">* Invalid Credentials</span>}
                                        </div>

                                        <input
                                            type="email"
                                            className={credentialError ? errorInput: inputStyle}
                                            placeholder="Email"
                                            style={{ transition: "all .15s ease" }}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            value={email}
                                            required
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <div className="flex justify-between">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Password
                                            </label>
                                            {credentialError && <span className="block capitalize text-red-600 text-xs font-semibold mb-2">* Invalid Credentials</span>}
                                        </div>
                                        <input
                                            type="password"
                                            className={credentialError ? errorInput : inputStyle}
                                            placeholder="Password"
                                            style={{ transition: "all .15s ease" }}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                            value={password}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                                style={{ transition: "all .15s ease" }}
                                            />
                                            <span className="ml-2 text-sm font-semibold text-gray-700">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                            type="submit"
                                            style={{ transition: "all .15s ease" }}
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6">
                            <div className="w-1/2">
                                <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                    className="text-gray-300"
                                >
                                    <small>Forgot password?</small>
                                </a>
                            </div>
                            <div className="w-1/2 text-right">
                                <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                    className="text-gray-300"
                                >
                                    <small>Create new account</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
    const user = req.session.get('user')

    if (user) {
        return {
            redirect: {
                destination: '/admin/dashboard',
                permanent: false,
            },
        }
    }

    return {
        props: {}
    }
})

export default login
