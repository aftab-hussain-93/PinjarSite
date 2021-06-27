import React from "react";
import Link from 'next/link'

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-around bg-white m-0 h-navHeight shadow-md z-20">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-5/6 lg:pl-14 mx-auto relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div className="cursor-pointer pl-8 inline-block">
                            <Link href='/'><img
                                className="w-full h-full"
                                src="/nav_logo.png"
                                alt="logo"
                            />
                            </Link>
                        </div>
                        {!navbarOpen && <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>}
                        {navbarOpen && <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>}
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center px-14" +
                            (navbarOpen ? "flex bg-white h-4/5 shadow-lg" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto z-50 pt-5 lg:p-0 text-center">
                            <li className='navItem'>
                                <Link href='/events'>Events</Link>
                            </li>
                            <li className='navItem'>
                                <Link href='/members'>Members</Link>
                            </li>
                            <li className='navItem'>
                                <Link href='/about'>About</Link>
                            </li>
                            <li className='navItem'>
                                <Link href='/benefits'>Benefits</Link>
                            </li>
                            <li className='navItem'>
                                <Link href='/about'>Reports</Link>
                            </li>
                            <li className='navItem'>
                                <Link href='/personalities'>Personalities</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

// import Link from 'next/link'

// const Nav = () => {
//     return (
//         <nav className="flex md:justify-around h-navHeight m-0 justify-between bg-white items-center px-12 z-50 shadow-md">
            // <div className="cursor-pointer">
            //     <Link href='/'><img
            //         className="w-full h-full"
            //         src="/nav_logo.png"
            //         alt="logo"
            //     />
            //     </Link>
            // </div>
//             <ul className="hidden md:flex items-center">
                // <li className='navItem hover:text-primary'>
                //     <Link href='/events'>Events</Link>
                // </li>
                // <li className='navItem hover:text-primary'>
                //     <Link href='/organization'>Organization</Link>
                // </li>
                // <li className='navItem hover:text-primary'>
                //     <Link href='/about'>About</Link>
                // </li>
                // <li className='navItem hover:text-primary'>
                //     <Link href='/about'>Benefits</Link>
                // </li>
                // <li className='navItem hover:text-primary'>
                //     <Link href='/about'>Reports</Link>
                // </li>
                // <li className='navItem hover:text-primary'>
                //     <Link href='/personalities'>Personalities</Link>
                // </li>
//             </ul>
//             <div className="px-4 cursor-pointer md:hidden" id="burger">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//             </div>
//         </nav>
//     )
// }

// export default Nav