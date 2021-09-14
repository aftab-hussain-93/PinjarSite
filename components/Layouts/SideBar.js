import Link from 'next/link'
import React from 'react'
import { useProfile } from '../../utils/auth'

const LinkBtn = React.forwardRef(({ onClick, href, title }, ref) => {
    return (
        <a className="block pt-1 text-left md:py-3 pl-2 align-middle text-gray-50 text-md no-underline sm:border-b-2 sm:border-davysGrey hover:border-primary" href={href} onClick={(e) => {
            onClick(e)
        }
        } ref={ref}>
            {title}
        </a>
    )
})

const SideBar = () => {
    const { user, isLoading, isError } = useProfile()

    return (
        <div className="md:relative mx-auto">
            <ul className="list-reset flex flex-row md:flex-col">
                <li className="mr-3 flex-1">
                    <Link href='/admin/dashboard' passHref><LinkBtn title={`Dashboard`} /></Link>
                </li>
                {(user && user.isAdmin)? (<li className="mr-3 flex-1">
                    <Link href='/admin/users' passHref><LinkBtn title={`User Management`} /></Link>
                </li>):null}
                <li className="mr-3 flex-1">
                    <Link href='/admin/events' passHref><LinkBtn title={`Event Management`} /></Link>
                </li>
                <li className="mr-3 flex-1">
                    <Link href='/admin/static' passHref><LinkBtn title={`Static Content Management`} /></Link>
                </li>
                {/* <li className="mr-3 flex-1">
                    <Link href='/admin/reports' passHref><LinkBtn title={`Report Management`} /></Link>
                </li>
                <li className="mr-3 flex-1">
                    <Link href='/admin/images' passHref><LinkBtn title={`Static Asset Management`} /></Link>
                </li>

                <li className="mr-3 flex-1">
                    <Link href='/admin/users' passHref><LinkBtn title={`Personalities`} /></Link>
                </li> */}
            </ul>
        </div>

    )
}

export default SideBar