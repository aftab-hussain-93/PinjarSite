import Meta from '../components/Meta'
import EventCard from '../components/EventCard'

const event = () => {
    const description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, sit eius harum possimus eaque quod dolorum dicta ratione aliquam et illo molestiae odit provident quis qui, necessitatibus soluta similique aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repellat, obcaecati non dolor autem velit praesentium expedita iusto est error eligendi. Sed iusto error natus ad consectetur saepe ab earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic optio adipisci at aliquid enim, molestiae quas veritatis quisquam alias eos repellat unde obcaecati quibusdam libero! Alias inventore tempore fuga.`
    const img = `/events/event_img1.jpeg`
    const eventName = `Event name`
    const dateTime = `25-JULY-2020`
    return (
        <>
            <Meta title={'Events'} />
            <section className="responsivePageDiv">
                <h1 className="routeHeading">EVENTS</h1>
                <h1 className="routeSubheading">Upcoming</h1>

                <div className="mt-8 grid lg:grid-cols-2 gap-10"> {/** Events go here */}
                    <EventCard eventName={eventName} img={img} description={description}  dateTime={dateTime}/>
                    <EventCard eventName={eventName} img={img} description={description} dateTime={dateTime}/>
                    <EventCard eventName={eventName} img={img} description={description} dateTime={dateTime}/>
                    <EventCard eventName={eventName} img={img} description={description} dateTime={dateTime}/>
                    <EventCard eventName={eventName} img={`/portrait_pic.jpg`} description={description} dateTime={dateTime}/>
                </div>
            </section>
        </>
    )
}

export default event