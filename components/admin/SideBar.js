import Link from 'next/link'
import React from 'react'

const LinkBtn = React.forwardRef(({ onClick, href, title }, ref) => {
    return (
        <a className="block pt-1 text-center md:py-3 pl-1 align-middle text-gray-50 text-xl no-underline sm:border-b-2 sm:border-davysGrey hover:border-primary" href={href} onClick={() => {
            setNavbarOpen(false)
            onClick()
        }
        } ref={ref}>
            {title}
        </a>
    )
})

const SideBar = () => {
    return (
        <div className="md:relative mx-auto">
            <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                <li className="mr-3 flex-1">
                    <Link href='/admin/events' passHref><LinkBtn title={`Events`} /></Link>
                    {/* <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-primary">
                        <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link</span>
                    </a> */}
                </li>
                <li className="mr-3 flex-1">
                    <Link href='/admin/reports' passHref><LinkBtn title={`Reports`} /></Link>
                </li>
                {/* 
                <li className="mr-3 flex-1">
                    <Link href='/admin/events' passHref><LinkBtn title={`Personalities`} /></Link>
                </li> */}
                <li className="mr-3 flex-1">
                    <Link href='/admin/images' passHref><LinkBtn title={`Images`} /></Link>
                </li>
                {/* <li className="mr-3 flex-1">
                    <Link href='/admin/events' passHref><LinkBtn title={`Circulars`} /></Link>
                </li> */}
                <li className="mr-3 flex-1">
                    <Link href='/admin/users' passHref><LinkBtn title={`Users`} /></Link>
                </li>
                {/* <li className="mr-3 flex-1">
                    <Link href='/admin/events' passHref><LinkBtn title={`Articles`} /></Link>
                </li>
                <li className="mr-3 flex-1">
                    <Link href='/admin/events' passHref><LinkBtn title={`Logout`} /></Link>
                </li> */}
            </ul>
        </div>

    )
}

export default SideBar