
import Meta from '../../components/Meta'

const users = () => {

    return (
        <>
            <Meta title='User Management' />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold capitalize text-primary "> User Management </span>
                {/* <span className="btn text-primary bg-white border-primary border hover:bg-primary hover:text-white">Add a New Event</span> */}
            </div>
        </>
    )
}

export default users