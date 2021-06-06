import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/admin/SideBar.module.css'

const Nav = () => {
    return (
        <div className={styles.sideBarContainer}>
            <div className={styles.item}><Link href="/admin/events">Events</Link></div>
            <div className={styles.item}><Link className={styles.item} href="#">Community</Link></div>
            <div className={styles.item}><Link className={styles.item} href="#">Circulars</Link></div>
            <div className={styles.item}><Link className={styles.item} href="#">Articles</Link></div>
            <div className={styles.item}><Link className={styles.item} href="#">Users</Link></div>
            <div className={styles.item}><Link className={styles.item} href="#">Logout</Link></div>
        </div>
    )
}

export default Nav