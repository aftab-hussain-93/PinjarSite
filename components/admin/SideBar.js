import Link from 'next/link'

const Nav = () => {
    return (
        // <div className={styles.sideBarContainer}>
        <div>
            <div className="sidebarItem"><Link href="/admin/events">Events</Link></div>
            {/* <div className="sidebarItem"><Link href="/admin/static">Static Content Management</Link></div>
            <div className="sidebarItem"><Link href="#">Circulars</Link></div>
            <div className="sidebarItem"><Link href="#">Articles</Link></div>
            <div className="sidebarItem"><Link href="#">Users</Link></div>
            <div className="sidebarItem"><Link href="#">Logout</Link></div>
            <div className="sidebarItem"><Link href="#">Logout</Link></div>
            <div className="sidebarItem"><Link href="#">Logout</Link></div> */}
        </div>
    )
}

export default Nav