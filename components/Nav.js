import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'><Image
                        src="/nav_logo.png"
                        alt="logo"
                        width={75}
                        height={75}
                    /></Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/about'>Benefits</Link>
                </li>
                <li>
                    <Link href='/about'>Reports</Link>
                </li>
                <li>
                    <Link href='/about'>Events</Link>
                </li>
                <li>
                    <Link href='/personalities'>Personalities</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav