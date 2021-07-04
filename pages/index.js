import Meta from '../components/Meta'
import Jumbotron from '../components/Jumbotron'
import HalfWidthLayout from '../components/Layouts/HalfWidthLayout'
import AssociationDetails from '../components/AssociationDetails'
import AllEvents from '../components/Events/AllEvents'

const preamble = {
  headline: 'Preamble',
  downloadIcon: true,
  downloadLink: `/documents/Preamble_ನಿಗಮದ-ಮನವಿ1-12-20.pdf`,
  htmlContent: `<p>The Nadaf community is also called with names - Behna, Dudekula, Mansuri, Pinjar in different regions of India. Ancestors of our community immigrated from Afghanistan and Persia (Iran) for the business purpose of Cotton ginning and trading.</p> <br />
                <p>The community is called as Behna and Mansuri in North India, as Dudekula in Andrapradesh and Telangana, as Nadafs and Pinjars in Karnataka. Total population of this community may exceed 10 million. King Tippu Sulthan belongs to this community. </p>`
}

export default function Home({ events }) {
  return (
    <>
      <Meta/>
      <Jumbotron />
      <section className="responsivePageDiv">
        <HalfWidthLayout {...preamble} />
        <AssociationDetails />
        <AllEvents events={events}/>
      </section>
    </>
  )
}


export async function getServerSideProps(context) {
  const url = process.env.URL

  const res = await fetch(`${url}api/events`)

  const data = await res.json()

  return {
    props: {
      events: data.events
    }, // will be passed to the page component as props
  }
}
