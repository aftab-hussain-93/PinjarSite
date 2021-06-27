import Link from 'next/link'
import Image from 'next/image'

const EventCard = ({ eventName, img, description, dateTime, location }) => {
    return (
        <article className="eventCard h-65">
            {/* <img src="/portrait_pic.jpg" alt="stew" className="w-full h-32 sm:h-56 object-cover" /> */}
            <img src={img} className="w-full h-40 sm:h-56 object-cover" />
            <div className="m-4">
                <div className="flex justify-between">
                    <span className="font-bold">{eventName}</span>
                    <span className="text-gray-500 text-sm">Posted by Mario</span>
                </div>
                <span className="text-gray-500 text-md font-bold">{location ? location.city : ``}, {location ? location.state : ``}, {location ? location.country : ``}</span>
                <div className="sm:h-10 overflow-hidden text-gray-500 text-sm sm:block hidden">
                    {description}
                </div>
                <div className="text-primary text-sm font-bold cursor-pointer tracking-wider hover:text-gray-500">
                    <Link href='/personalities'>More Details</Link>
                </div>
            </div>
            <div className="badge">
                <svg className="w-5 block" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className='ml-1 uppercase'>{dateTime}</p>
            </div>
        </article>
    )
}

export default EventCard
