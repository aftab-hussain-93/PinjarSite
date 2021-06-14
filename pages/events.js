import Meta from '../components/Meta'
import EventCard from '../components/EventCard'

const event = () => {
    const description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, sit eius harum possimus eaque quod dolorum dicta ratione aliquam et illo molestiae odit provident quis qui, necessitatibus soluta similique aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur repellat, obcaecati non dolor autem velit praesentium expedita iusto est error eligendi. Sed iusto error natus ad consectetur saepe ab earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic optio adipisci at aliquid enim, molestiae quas veritatis quisquam alias eos repellat unde obcaecati quibusdam libero! Alias inventore tempore fuga.`
    return (
        <>
            <Meta title={'Events'} />
            <div className="md:max-w-2/3 mx-auto p-12">
                <h1 className="text-5xl border-gray-300 border-b pb-2">EVENTS</h1>
                <h1 className="text-2xl mt-4 pl-1">Upcoming</h1>

                <div className="mt-8 grid lg:grid-cols-2 gap-10"> {/** Events go here */}
                    <EventCard eventName={`Event name`} img={`/event_img1.jpeg`} description={description}/>
                    <EventCard eventName={`Event name`} img={`/event_img1.jpeg`} description={description}/>
                    <EventCard eventName={`Event name`} img={`/event_img1.jpeg`} description={description}/>
                    <EventCard eventName={`Event name`} img={`/event_img1.jpeg`} description={description}/>
                    <EventCard eventName={`Event name`} img={`/portrait_pic.jpg`} description={description}/>
                </div>
            </div>
        </>
    )
}

export default event