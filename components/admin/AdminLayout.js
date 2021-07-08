import SideBar from './SideBar'
import { logoutUser } from '../../utils/auth'

const AdminLayout = ({ children }) => {
    
    return (
        <div className="flex md:flex-row-reverse flex-wrap bg-white">

            <div className="w-full md:w-5/6 relative mb-20 sm:mb-2">
                <button
                    onClick={logoutUser}
                    className="absolute right-7 sm:right-10 sm:top-5 top-4 downloadBtn">
                    Logout
                </button>
                <div className="container pt-4 px-6 overflow-y-scroll h-screen">
                    {children}
                </div>      
            </div>

            <div className="w-full md:w-1/6 bg-davysGrey px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600 overflow-x-auto">
                <SideBar />
            </div>
        </div>
    )
{/* return (
        <div className="md:grid md:grid-cols-6 h-screen">
            <div className="hidden md:block md:col-span-1 h-full bg-gray-900">
                <SideBar />
            </div>
            <div className="md:col-span-5 overflow-y-scroll bg-white text-gray-600">
                {children}
            </div>            
        </div>
    ) */}
}

export default AdminLayout
