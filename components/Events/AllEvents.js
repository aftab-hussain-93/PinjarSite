import UpcomingEvents from "./UpcomingEvents"
import PastEvents from "./PastEvents"

const AllEvents = ({ events }) => {

    const headline = "Events"
    const upcomingEvents = []
    const pastEvents = []
    events.forEach(event => {
        console.log(event.eventDate)
        if (new Date(event.eventDate) > new Date()) {
            upcomingEvents.push(event)
        } else {
            pastEvents.push(event)
        }
    })

    return (
        <article className="mb-4">
            <span className="fullPageBorderLine"></span>
            <div className="flex justify-between items-center mb-3">
                <h1 className="articleHeading">{headline}</h1>
            </div>
            <UpcomingEvents events={upcomingEvents} />
            <PastEvents events={pastEvents} />
        </article>
    )
}

export default AllEvents
