import SideBar from './SideBar'

const AdminLayout = ({ children }) => {
    const style = {
        marginLeft: '20%',
        paddingLeft: '1rem'
    };
    return (
        <>
            <SideBar />
            <div style={style}>
                {children}
            </div>            
        </>
    )
}

export default AdminLayout
