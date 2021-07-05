import { useState} from 'react'
import Meta from '../../components/Meta'
import EventForm from '../../components/admin/EventForm'
import styles from '../../styles/admin/Event.module.css'

const dashboard = ({ googleKey }) => {
    const [addEvent, setAddEvent] = useState(false);
    console.log(addEvent)
    return (
        <>
            <Meta title='Events' />
            <div className="w-full flex justify-between border-b border-primary pb-5">
                <span className="text-2xl sm:text-4xl font-semibold capitalize text-primary "> Manage Events </span>
                {/* <span className="btn text-primary bg-white border-primary border hover:bg-primary hover:text-white">Add a New Event</span> */}
            </div>
            {addEvent == true && <EventForm googleKey={googleKey} setAddEvent={setAddEvent}/>}
            {/* {!addEvent && <div className="flex flex-col gap-10 container h-3/6 justify-center items-center p-10"> */}
            {!addEvent && <div className="flex flex-col container justify-center items-center h-3/6 p-10">
                <div className="flex flex-col justify-center items-center border gap-10 sm:p-16 p-10 mx-auto bg-gray-50 rounded-lg overflow-hidden max-w-2xl sm:max-w-md">
                    <button onClick={() => { setAddEvent(true) }} className="downloadBtn block w-full text-xl">Create Event</button>
                    <button onClick={() => { setAddEvent(true) }} className="downloadBtn block w-full text-xl">Edit Event</button>
                    <button onClick={() => { setAddEvent(true) }} className="downloadBtn block w-full text-xl">Delete Event</button>
                </div>
            </div>
            }
            
        </>
    )
}


export async function getServerSideProps(context) {
    return {
        props: {
            googleKey: process.env.GOOGLE_MAPS_API_KEY
        }, 
    }
}

export default dashboard
