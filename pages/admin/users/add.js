import axios from 'axios'
import { useState } from 'react'
import Router from 'next/router'
import Meta from '../../../components/Meta'

const users = ({ userList }) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirm, setconfirm] = useState("")
    const [type, settype] = useState("default")
    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const updateUserType = (e) => {
        if (e.target.checked) {
            settype(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || email.trim() == "") {
            setEmailError(true)
            return
        }
        if (!name || name.trim() == "") {
            setNameError(true)
            return
        }
        if (!password || password.trim() == "" || !confirm || confirm.trim() == "" || confirm != password) {
            setPasswordError(true)
            return
        }
        const emailUsers = userList.filter(user => user.email === email)
        if (emailUsers?.length > 0) {
            setEmailError(true)
            return
        }

        const newUser = {
            displayName: name,
            password,
            email,
            isAdmin: type === "admin"
        }

        console.log("Adding a new user", newUser)
        try {
            await axios.post(`/api/users`, newUser)
            Router.push(`/admin/users`)
        } catch (error) {
            console.log(error)
            console.log("Could not create new user")
            window.location.reload()
        }               
    }

    return (
        <>
            <Meta title='User Management' />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold leading-normal capitalize text-primary "> User Management </span>
            </div>
            <div className="container mt-5">
                <div className="container mt-5">
                    <div className="flex justify-center gap-10">
                        <h1 className="text-2xl font-semibold leading-normal capitalize text-gray-600 block">Create New User</h1>
                    </div>

                    <div className="max-w-md mx-auto bg-gray-50 rounded-lg overflow-hidden md:max-w-xl mt-5">
                        <form
                            className="flex col-span-1 lg:col-span-2 shadow-md border w-full flex-col justify-start sm:p-16 p-4 gap-5"
                            onSubmit={handleSubmit}
                            autoComplete="off"
                        >
                            <div>
                                <span>User Type</span>
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            name="userType"
                                            value="default"
                                            onChange={updateUserType}
                                            checked={type == "default"}
                                        />
                                        <span className="ml-2">Default</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            name="userType"
                                            value="admin"
                                            onChange={updateUserType}
                                            checked={type == "admin"}
                                        />
                                        <span className="ml-2">Admin</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <span className="text-md">Name</span>
                                    {nameError && <span className="text-sm text-red-500">* Invalid</span>}
                                </div>
                                <input
                                    type="text"
                                    maxLength="30"
                                    name="name"
                                    onChange={(e) => {
                                        setNameError(false)
                                        setname(e.target.value)
                                    }}
                                    value={name}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " +  (nameError? "border-red-400 focus:border-red-600": "focus:border-primary") }
                                    required
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <span className="text-md">Email</span>
                                    {emailError && <span className="text-sm text-red-500">* Invalid</span>}
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => {
                                        setEmailError(false)
                                        setemail(e.target.value)
                                    }}
                                    value={email}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (emailError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                                    required
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center">
                                    <span className="text-md">Password</span>
                                    {passwordError && <span className="text-sm text-red-500">* Invalid</span>}
                                </div>                                
                                <input
                                    type="password"
                                    name="password"
                                    onChange={(e) => {
                                        setPasswordError(false)
                                        setpassword(e.target.value)
                                    }}
                                    minLength="8"
                                    value={password}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (passwordError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                                    required
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <span className="text-md">Confirm Password</span>
                                    {passwordError && <span className="text-sm text-red-500">* Invalid</span>}
                                </div>                                
                                <input
                                    type="password"
                                    name="confirm_password"
                                    onChange={(e) => {
                                        setPasswordError(false)
                                        setconfirm(e.target.value)
                                    }}
                                    minLength="8"
                                    value={confirm}
                                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (passwordError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                                    required
                                />
                            </div>

                            <div className="mt-3 flex justify-end gap-5">
                                <button
                                    onClick={() => { setAddEvent(false) }}
                                    className="hover:underline text-primary">
                                    <a href="/admin/users">Cancel</a>
                                </button>
                                <button
                                    className="downloadBtn"
                                >Create</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL

    try {
        const { data: { users } } = await axios.get(`${url}/api/users`)

        return {
            props: {
                userList: users || []
            }, // will be passed to the page component as props
        }
    } catch (error) {
        console.log("Errored out while getting users")
        console.log(error)
        return {
            props: {}
        }
    }
}

export default users