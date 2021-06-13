import SideBar from './SideBar'

const AdminLayout = ({ children }) => {

    return (
        <div className="md:grid md:grid-cols-4 h-screen">
            <div className="hidden md:block md:col-span-1 h-full bg-gray-900">
                <SideBar />
            </div>
            {/* <div className="block md:hidden w-full h-11 bg-primary">
                <svg className="h-6 w-6 text-white-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div> */}
            <div className="md:col-span-3 overflow-y-scroll">
                {children}
            </div>            
        </div>
    )
}

export default AdminLayout
