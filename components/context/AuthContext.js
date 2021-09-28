import { createContext, useContext, useState } from 'react'
import { login as userLogin } from '../../utils/auth'

// export const AuthContext = createContext({
//     user: undefined,
//     setUser: () => ({}),
//     logout: () => ({})
// })
export const AuthContext = createContext({
    isAuthenticated: false,
    user: {},
    setUser: () => { },
    setisAuthenticated: () => { }
})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setisAuthenticated] = useState(false);

    // const login = async (email, password) => {
    //     const { status, user: loggedInUser, error, message } = await userLogin(email, password)
    //     if (error || status !== 200) {
    //         setUser(null)
    //         return {
    //             error,
    //             message
    //         }
    //     }
    //     else if (status === 200) {
    //         console.log("IN auth context")
    //         console.log(loggedInUser)
    //         console.log(test)
    //         setUser("Helloooooooo")
    //         setTest("Hellloooooooo")
    //         console.log(test)
    //         console.log(user)
    //         console.log("IN auth context.................")
    //         return {
    //             message: 'Login successful'
    //         }
    //     }
    // }

    const logout = () => {
        setUser(null)
    }

    const providerValue = {
        user,
        setUser,
        isAuthenticated,
        setisAuthenticated
    }

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("You need to wrap AuthProvider.");
    }
    return context;
}