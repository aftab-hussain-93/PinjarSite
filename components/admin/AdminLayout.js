import SideBar from './SideBar'
import Router from 'next/router'
import axios from 'axios'

const logoutUser = async () => {
    await axios.get(`/api/logout`)
    Router.push('/')
}

const AdminLayout = ({ children }) => {
    return (
        <div className="flex md:flex-row-reverse flex-wrap bg-white h-5/6">

            <div className="w-full md:w-5/6 relative mb-20 sm:mb-2">
                <button
                    onClick={logoutUser}
                    className="absolute right-7 sm:right-10 sm:top-5 top-4 downloadBtn">
                    Logout
                </button>
                <div className="container pt-4 px-6 overflow-y-visible">
                    {children}
                </div>
            </div>

            <div className="w-full md:w-1/6 bg-davysGrey px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600 overflow-x-auto">
                <SideBar />
            </div>
        </div>
    )
}

export default AdminLayout
