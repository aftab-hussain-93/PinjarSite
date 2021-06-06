import { useState} from 'react'
import Meta from '../../components/Meta'
import EventForm from '../../components/admin/EventForm'
import styles from '../../styles/admin/Event.module.css'

const dashboard = () => {
    const [addEvent, setAddEvent] = useState(false);
    return (
        <>
            <Meta title='Events' />
            <div>
                <div className={styles.headingSection}>
                    <span className={`headingTitle`}>{`EVENTS. Add new events here`}</span>
                    <button onClick={() => { setAddEvent(true) }} className={styles.actionBtn}>{`+Add Event`}</button>
                </div>
                <EventForm />
            </div>
        </>
    )
}

export default dashboard
