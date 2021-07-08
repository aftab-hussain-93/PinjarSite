import EventCard from "./EventCard"

const PastEvents = ({ events }) => {

    if (events && events.length > 0) {
        return (
            <section className="mb-4">
                <h1 className="routeSubheading">Past Events</h1>
                <section className="mt-8 grid lg:grid-cols-2 gap-10">
                    {events.map(({ _id, title, photo, description, eventDate, venue }, idx) => {
                        return <EventCard key={idx} id={_id} title={title} photo={photo} description={description} eventDate={eventDate} venue={venue} />
                    })}
                </section>
            </section>
        )
    } else {
        return null
    }

}

export default PastEvents
