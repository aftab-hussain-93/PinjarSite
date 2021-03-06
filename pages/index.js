import Meta from '../components/Meta'
import Jumbotron from '../components/Jumbotron'
import HalfWidthLayout from '../components/Layouts/HalfWidthLayout'
import AssociationDetails from '../components/AssociationDetails'
import AllEvents from '../components/Events/AllEvents'

import { apiUrl, serverUrl } from '../config/api.config'

export default function Home({ events, images }) {
  
  const preamble = {
    headline: 'Preamble',
    downloadIcon: true,
    photo: "https://cdn.statically.io/gh/aftab-hussain-93/PinjarSite/main/public/events/event_img1.jpeg",
    downloadLink: `${serverUrl}/uploads/documents/Preamble_ನಿಗಮದ-ಮನವಿ1-12-20.pdf`,
    htmlContent: `<p>The Nadaf community is also called with names - Behna, Dudekula, Mansuri, Pinjar in different regions of India. Ancestors of our community immigrated from Afghanistan and Persia (Iran) for the business purpose of Cotton ginning and trading.</p> <br />
                <p>The community is called as Behna and Mansuri in North India, as Dudekula in Andrapradesh and Telangana, as Nadafs and Pinjars in Karnataka. Total population of this community may exceed 10 million. King Tippu Sulthan belongs to this community. </p>`
  }

  return (
    <>
      <Meta/>
      <Jumbotron banner="https://res.cloudinary.com/dthf9n79u/image/upload/v1625770241/pinjar_site/mtzlvoghj0wsvjivcma3.jpg" />
      <section className="responsivePageDiv">
        <HalfWidthLayout {...preamble} />
        <AssociationDetails />
        {events && events.length > 0 && <AllEvents events={events} />}
      </section>
    </>
  )
}


export async function getServerSideProps() {

  const events = await fetch(`${apiUrl}/events/users`).then(res => res.json())
  const upcomingEvents = []
  const pastEvents = []
  events.forEach(event => {
    if (new Date(event.eventDate) > new Date(Date.now())) {
      upcomingEvents.push(event)
    } else {
      pastEvents.push(event)
    }
  })

  return {
    props: {
      events: {
        past: pastEvents,
        upcoming: upcomingEvents,
      },
      // images: allImages
    }, // will be passed to the page component as props
  }
}
