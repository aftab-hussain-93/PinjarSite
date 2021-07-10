import EventCard from "./EventCard"

const UpcomingEvents = ({ events }) => {

    if (events && events.length > 0) {
        return (
            <section className="mb-4">
                <h1 className="routeSubheading">Upcoming</h1>
                <section className="mt-8 grid lg:grid-cols-2 gap-10">
                    {events.map(({ _id, title, photo, description, dateTime, venue, eventDate }, idx) => {
                        return <EventCard key={idx} id={_id} title={title} photo={photo} description={description} eventDate={eventDate} venue={venue}/>
                    })}
                </section>
            </section>
        )
    } else {
        return null
    }

}

export default UpcomingEvents
