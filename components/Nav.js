import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="flex md:justify-around h-navHeight m-0 justify-between bg-white items-center px-12 z-50 shadow-md">
            <div className="cursor-pointer">
                <Link href='/'><img
                    className="w-full h-full"
                    src="/nav_logo.png"
                    alt="logo"
                    // width={90}
                    // height={90}
                />
                </Link>
            </div>
            <ul className="hidden md:flex items-center">
                <li className='navItem hover:text-primary'>
                    <Link href='/events'>Events</Link>
                </li>
                <li className='navItem hover:text-primary'>
                    <Link href='/organization'>Organization</Link>
                </li>
                <li className='navItem hover:text-primary'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='navItem hover:text-primary'>
                    <Link href='/about'>Benefits</Link>
                </li>
                <li className='navItem hover:text-primary'>
                    <Link href='/about'>Reports</Link>
                </li>
                <li className='navItem hover:text-primary'>
                    <Link href='/personalities'>Personalities</Link>
                </li>
            </ul>
            <div className="rounded-full py-2 px-10 capitalize font-semibold cursor-pointer tracking-wider text-primary bg-white border-primary border hover:bg-primary hover:text-white text-lg">
                <Link href='/login'>Login
                </Link>
            </div>
            <div className="px-4 cursor-pointer md:hidden" id="burger">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </nav>
    )
}

export default Nav