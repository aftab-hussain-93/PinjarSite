import EventsContainer from "./EventsContainer"

const AllEvents = ({ events: { past, upcoming } }) => {
    const headline = "Events"
    return (
        <article className="mb-4">
            <span className="fullPageBorderLine"></span>
            <div className="flex justify-between items-center mb-3">
                <h1 className="articleHeading">{headline}</h1>
            </div>
            <EventsContainer type="upcoming" events={upcoming} />
            <EventsContainer type="past" events={past} />
        </article>
    )
}

export default AllEvents
