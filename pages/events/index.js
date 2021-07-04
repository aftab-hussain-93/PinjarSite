import Meta from '../../components/Meta'
import UpcomingEvents from '../../components/Events/UpcomingEvents'
import PastEvents from '../../components/Events/PastEvents'

const event = ({ events }) => {
    const upcomingEvents = []
    const pastEvents = []
    events.forEach(event => {
        if (new Date(event.dateTime) > new Date()) {
            upcomingEvents.push(event)
        } else {
            pastEvents.push(event)
        }
    })

    return (
        <>
            <Meta title={'Events'} />
            <section className="responsivePageDiv">
                <h1 className="routeHeading">Events</h1>
                <UpcomingEvents events={upcomingEvents} />
                <PastEvents events={pastEvents} />
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    const url = process.env.URL

    const res = await fetch(`${url}/api/events`)

    const data = await res.json()

    return {
        props: {
            events: data.events
        }, // will be passed to the page component as props
    }
}

export default event