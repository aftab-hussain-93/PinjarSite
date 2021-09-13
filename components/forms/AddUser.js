import React from 'react'

const AddUser = ({
    handleSubmit,
    setFormValue,
    formValues: { first, last, email, password, confirm, isAdmin },
    setformError,
    formError: { first: fNameError, last: lNameError, email: emailError, password: pwdError, confirm: confirmError },
    inUseError,
    setInUseError
}) => {

    const updateFormVal = (key, val) => {
        setFormValue(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    const updateFormError = (key, val) => {
        setformError(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    const updateUserRole = (e) => {
        if (e.target.checked) {
            let val;
            if (e.target.value == "admin") val = true
            else val = false            
            updateFormVal("isAdmin", val)
        }
    }

    return (
        <form
            className="flex col-span-1 lg:col-span-2 shadow-md border w-full flex-col justify-start sm:p-16 p-4 gap-5"
            onSubmit={handleSubmit}
        >
            <div>
                <span className="text-md font-semibold">User Type</span>
                <div className="mt-2">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            className="form-radio"
                            name="isAdmin"
                            value="default"
                            onChange={updateUserRole}
                            checked={!isAdmin}
                        />
                        <span className="ml-2">Default</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input
                            type="radio"
                            className="form-radio"
                            name="isAdmin"
                            value="admin"
                            onChange={updateUserRole}
                            checked={isAdmin}
                        />
                        <span className="ml-2">Admin</span>
                    </label>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <span className="text-md font-semibold">First Name</span>
                    {fNameError && <span className="text-sm text-red-500">* Invalid</span>}
                </div>
                <input
                    type="text"
                    maxLength="30"
                    name="first"
                    onChange={(e) => {
                        updateFormError("first", false)
                        updateFormVal("first", e.target.value)
                    }}
                    value={first}
                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (fNameError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                    required
                />
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <span className="text-md font-semibold">Last Name</span>
                    {lNameError && <span className="text-sm text-red-500">* Invalid</span>}
                </div>
                <input
                    type="text"
                    maxLength="30"
                    name="last"
                    onChange={(e) => {
                        updateFormError("last", false)
                        updateFormVal("last", e.target.value)
                    }}
                    value={last}
                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (lNameError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                    required
                />
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <span className="text-md font-semibold">Email</span>
                    {emailError && <span className="text-sm text-red-500">* Invalid</span>}
                    {inUseError && <span className="text-sm text-red-500">* Email ID is in use</span>}
                </div>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => {
                        setInUseError(false)
                        updateFormError("email", false)
                        updateFormVal("email", e.target.value)
                    }}
                    value={email}
                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (emailError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                    required
                />
            </div>

            <div>
                <div className="flex justify-between items-center">
                    <span className="text-md font-semibold">Password</span>
                    {pwdError && <span className="text-sm text-red-500">* Invalid</span>}
                </div>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => {
                        updateFormError("password", false)
                        updateFormVal("password", e.target.value)
                    }}
                    minLength="8"
                    value={password}
                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (pwdError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                    autoComplete="new-password"
                    required
                />
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <span className="text-md font-semibold">Confirm Password</span>
                    {confirmError && <span className="text-sm text-red-500">* Invalid</span>}
                </div>
                <input
                    type="password"
                    name="confirm"
                    onChange={(e) => {
                        updateFormError("confirm", false)
                        updateFormVal("confirm", e.target.value)
                    }}
                    minLength="8"
                    value={confirm}
                    className={"h-10 px-3 w-full border-2 focus:outline-none rounded " + (confirmError ? "border-red-400 focus:border-red-600" : "focus:border-primary")}
                    autoComplete="new-password"
                    required
                />
            </div>

            <div className="mt-3 flex justify-end gap-5">
                <button
                    className="hover:underline text-primary">
                    <a href="/admin/users">Cancel</a>
                </button>
                <button
                    className="downloadBtn"
                >Create</button>
            </div>
        </form>
    )
}

export default AddUser
