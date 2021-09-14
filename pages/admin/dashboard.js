// Components
import Meta from '../../components/Meta'
import FullPageLoader from '../../components/Loaders/FullPageLoader'
// Helpers
import { useProfile } from '../../utils/auth'

const dashboard = () => {
    const { user, isLoading } = useProfile()

    if (isLoading) return <FullPageLoader />

    return (
        <>
            <Meta title='Admin Dashboard' />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold capitalize text-primary ">Welcome {user.firstName}</span>
            </div>
        </>
    )
}

export default dashboard