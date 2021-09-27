import SideBar from './SideBar'

import { logout } from '../../utils/auth'

const AdminLayout = ({ children }) => {
    return (
        <div className="flex md:flex-row-reverse flex-wrap bg-gray-100 h-screen min-h-screen text-gray-500 overflow-y-scroll">
            <div className="w-full md:w-5/6 relative mb-20 sm:mb-2">
                <button
                    onClick={logout}
                    className="absolute right-7 sm:right-10 sm:top-5 top-4 downloadBtn">
                    Logout
                </button>
                <div className="container pt-4 px-6">
                    {children}
                </div>
            </div>

            <div className="w-full md:w-1/6 bg-davysGrey px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-20 md:h-full md:border-r-4 md:border-gray-600 overflow-x-auto">
                <SideBar />
            </div>
        </div>
    )
}

export default AdminLayout
