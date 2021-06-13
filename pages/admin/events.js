import { useState} from 'react'
import Meta from '../../components/Meta'
import EventForm from '../../components/admin/EventForm'
import styles from '../../styles/admin/Event.module.css'

const dashboard = () => {
    const [addEvent, setAddEvent] = useState(false);
    return (
        <>
            <Meta title='Events' />
            <div className="w-full mt-5 p-5 flex justify-between border-b border-gray-400 pb-5">
                <span className="text-4xl "> Events Page </span>
                <span className="btn text-primary bg-white border-primary border hover:bg-primary hover:text-white">Add a New Event</span>
            </div>
            <EventForm />
        </>
    )
}

export default dashboard
