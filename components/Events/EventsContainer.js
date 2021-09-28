import EventCard from "./EventCard"

const EventsContainer = ({ events, type }) => {
    let heading;
    if (type === "upcoming") heading = `Upcoming Events`
    else heading = `Past Events`

    if (events && events.length > 0) {
        return (
            <section className="mb-4">
                <h1 className="routeSubheading">{heading}</h1>
                <section className="mt-8 grid lg:grid-cols-2 gap-10">
                    {events.map((event, key) => {
                        return <EventCard key={key} event={event} />
                    })}
                </section>
            </section>
        )
    } else {
        return null
    }

}

export default EventsContainer
