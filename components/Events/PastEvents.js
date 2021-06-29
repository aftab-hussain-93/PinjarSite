import EventCard from "./EventCard"

const PastEvents = ({ events }) => {

    if (events && events.length > 0) {
        return (
            <section className="mb-4">
                <h1 className="routeSubheading">Past Events</h1>
                <section className="mt-8 grid lg:grid-cols-2 gap-10">
                    {events.map(({ id, eventName, img, description, dateTime }, idx) => {
                        return <EventCard key={id} id={id} eventName={eventName} img={img} description={description} dateTime={dateTime} />
                    })}
                </section>
            </section>
        )
    } else {
        return null
    }

}

export default PastEvents
