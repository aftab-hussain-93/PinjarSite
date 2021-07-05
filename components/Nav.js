import React from "react";
import Link from 'next/link'



export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    // `onClick`, `href`, and `ref` need to be passed to the DOM element
    // for proper handling
    const MyButton = React.forwardRef(({ onClick, href, title }, ref) => {
        return (
            <a className="block w-full h-full" href={href} onClick={() => {
                setNavbarOpen(false)
                onClick()
            }
            } ref={ref}>
                {title}
            </a>
        )
    })

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-around bg-white m-0 h-navHeight shadow-md z-20">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-5/6 lg:pl-14 mx-auto relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div className="cursor-pointer pl-2 sm:pl-8 inline-block">
                            <Link href='/'><img
                                className="w-full h-full"
                                src="/nav_logo.png"
                                alt="logo"
                            />
                            </Link>
                        </div>
                        {!navbarOpen && <button
                            className=" cursor-pointer text-xl leading-none px-1 sm:px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8 border border-solid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>}
                        {navbarOpen && <button
                            className=" cursor-pointer text-xl leading-none px-1 sm:px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8 border border-solid " fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                <Link href='/events' passHref><MyButton title={`Events`}/></Link>
                            </li>
                            <li className='navItem'>
                                <Link href='/members' passHref><MyButton title={`Members`} /></Link>
                            </li>
                            <li className='navItem'>
                                <Link href='/about' passHref><MyButton title={`About`} /></Link>
                            </li>
                            <li className='navItem'>
                                <Link href='/benefits' passHref><MyButton title={`Benefits`} /></Link>
                            </li>
                            <li className='navItem'>
                                <Link href='/reports' passHref><MyButton title={`Reports`} /></Link>
                            </li>
                            {/* <li className='navItem'>
                                <Link href='/personalities' passHref><MyButton title={`Personalities`} /></Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

