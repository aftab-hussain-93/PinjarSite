import Meta from '../components/Meta'
import Jumbotron from '../components/Jumbotron'
import FullWidthLayout from '../components/FullWidthLayout'
import HalfWidthLayout from '../components/HalfWidthLayout'
import AssociationDetails from '../components/AssociationDetails'

const planAndProgressReports = {
  headline: 'Plan and Progress Reports',
  downloadIcon: true,
  downloadLink: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
}

const preamble = {
  headline: 'Preamble',
  downloadIcon: true,
  downloadLink: `/documents/Preamble_ನಿಗಮದ-ಮನವಿ1-12-20.pdf`,
  htmlContent: `<p>The Nadaf community is also called with names - Behna, Dudekula, Mansuri, Pinjar in different regions of India. Ancestors of our community immigrated from Afghanistan and Persia (Iran) for the business purpose of Cotton ginning and trading.</p> <br />
                <p>The community is called as Behna and Mansuri in North India, as Dudekula in Andrapradesh and Telangana, as Nadafs and Pinjars in Karnataka. Total population of this community may exceed 10 million. King Tippu Sulthan belongs to this community. </p>`
}

export default function Home() {
  return (
    <>
      <Meta/>
      <Jumbotron />
      <section className="responsivePageDiv">
        <HalfWidthLayout {...preamble} />
        <AssociationDetails />
        <FullWidthLayout {...planAndProgressReports} />
      </section>
    </>
  )
}
