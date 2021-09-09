import axios from 'axios'
import React from 'react'
import Meta from '../../components/Meta'
import UpcomingEvents from '../../components/Events/UpcomingEvents'
import PastEvents from '../../components/Events/PastEvents'

const event = (props) => {

    console.log(props)

    // const [pastEvents, setPastEvents] = React.useState(null);
    // const [upcomingEvents, setUpcomingEvents] = React.useState(null);

    // React.useEffect(() => {
    //     fetch('http://localhost:3000/api/v1/events')
    //         .then(results => results.json())
    //         .then(data => {
    //             setPastEvents(data);
    //             setUpcomingEvents(data);
    //         });
    // }, []); // <-- Have to pass in [] here!


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

export const getServerSideProps = async (context) => {
    const serverUrl = process.env.URL
    // const [{ data: pastEvents }, { data: upcomingEvents }] = await Promise.all([
    //     axios.get(`${serverUrl}events/past`),
    //     axios.get(`${serverUrl}events/upcoming`)
    // ])
    
    // const data = await axios.get(`http://localhost:3000/api/v1/events`)
    // const resp = await fetch(`https://localhost:3000/api/v1/events`)
    // const data = await resp.json()
    try {
        // const { data } = await axios.get('api/events')
        const { data } = await fetch(`${serverUrl}/api/events`).then(res => res.json())
        // const data = await resp.json()

        console.log("IN ssp")
        console.log(data)

        return {
            props: {
                events: {
                    pastEvents: data,
                    upcomingEvents: data
                }
            }, // will be passed to the page component as props
        }
    } catch (e) {
        console.error(e)
        return {
            props: {
                pastEvents: [],
                upcomingEvents: []
            }
        }
    }
}

export default event