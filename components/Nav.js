import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div className={navStyles.navContainer}>
            <nav className={navStyles.nav}>
                <div className={navStyles.logo}>
                    <Link href='/'><Image
                        src="/nav_logo.png"
                        alt="logo"
                        width={80}
                        height={80}
                    />
                    </Link>
                </div>
                <ul>
                    <li className={navStyles.navItem}>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className={navStyles.navItem}>
                        <Link href='/about'>Benefits</Link>
                    </li>
                    <li className={navStyles.navItem}>
                        <Link href='/about'>Reports</Link>
                    </li>
                    <li className={navStyles.navItem}>
                        <Link href='/login'>Login</Link>
                    </li>
                    <li className={navStyles.navItem}>
                        <Link href='/personalities'>Personalities</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav