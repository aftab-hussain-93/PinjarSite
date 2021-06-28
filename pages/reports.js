import Meta from '../components/Meta'
import FullWidthLayout from '../components/FullWidthLayout'
import {Reports as messages} from '../locale/messages'

const planAndProgressReports = {
    headline: 'Plan and Progress Reports',
    downloadIcon: true,
    downloadLink: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
}

const reports = () => {

    return (
        <>
            <Meta title={'Association Reports'} />
            <section className="responsivePageDiv">
                <article className="mb-4">
                    <h1 className="routeHeading">{messages.mainHeading}</h1>
                    <span className="block mb-4"></span>
                    <FullWidthLayout {...planAndProgressReports} />
                    <div className="mt-4">
                        <span className="fullPageBorderLine"></span>
                        <h1 className="articleHeading">Audit and Budget Reports</h1>
                        <h2 className="routeSubheading">Audit Reports</h2>
                        <h2 className="routeSubheading">Budget Reports</h2>
                    </div>
                </article>
            </section>
        </>
    )
}
export default reports