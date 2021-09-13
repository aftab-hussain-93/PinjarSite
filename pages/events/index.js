import React from 'react'
import Meta from '../../components/Meta'

import { apiUrl } from '../../config/api.config'
import EventsContainer from '../../components/Events/EventsContainer'

const event = ({ events: { past, upcoming } }) => {
    
    return (
        <>
            <Meta title={'Events'} />
            <section className="responsivePageDiv">
                <h1 className="routeHeading">Events</h1>
                <EventsContainer type="upcoming" events={upcoming} />
                <EventsContainer type="past" events={past} />
            </section>
        </>
    )
}

export const getServerSideProps = async () => {
    const events = await fetch(`${apiUrl}/events/users`).then(res => res.json())
    const upcomingEvents = []
    const pastEvents = []
    events.forEach(event => {
        if (new Date(event.eventDate) > new Date(Date.now())) {
            upcomingEvents.push(event)
        } else {
            pastEvents.push(event)
        }
    })

    return {
        props: {
            events: {
                past: pastEvents,
                upcoming: upcomingEvents,
            },
        }, // will be passed to the page component as props
    }
}

export default event