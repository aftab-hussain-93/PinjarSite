import React from 'react'

const LoginForm = ({ handleSubmit, credentialError, email, password, setCredential, setCredentialError}) => {
    const inputStyle = "border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
    const errorInput = "border-2 border-red-600 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"

    const changeFormValue = (name, value) => {
        setCredential(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="container mx-auto px-4 h-screen">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
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
                                        {credentialError && credentialError.email && <span className="block capitalize text-red-600 text-xs font-semibold mb-2">* Invalid Email</span>}
                                    </div>

                                    <input
                                        type="email"
                                        className={(credentialError && credentialError.email) ? errorInput : inputStyle}
                                        name="email"
                                        placeholder="Email"
                                        style={{ transition: "all .15s ease" }}
                                        onChange={(e) => {
                                            setCredentialError({email: false, password: false})
                                            changeFormValue(e.target.name, e.target.value)
                                        }
                                        }
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
                                        {credentialError && credentialError.password && <span className="block capitalize text-red-600 text-xs font-semibold mb-2">* Invalid Password</span>}
                                    </div>
                                    <input
                                        type="password"
                                        className={(credentialError && credentialError.password) ? errorInput : inputStyle}
                                        name="password"
                                        placeholder="Password"
                                        style={{ transition: "all .15s ease" }}
                                        onChange={(e) => {
                                            setCredentialError({ email: false, password: false })
                                            changeFormValue(e.target.name, e.target.value)
                                        }
                                        }
                                        value={password}
                                        required
                                    />
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
                </div>
            </div>
        </div>
    )
}

export default LoginForm
