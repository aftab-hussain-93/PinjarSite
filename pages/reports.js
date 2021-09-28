import Meta from '../components/Meta'
import ReportContainer from '../components/Reports/ReportContainer'
import { Reports as messages } from '../locale/messages'
import { serverUrl, apiUrl  } from '../config/api.config'

const reports = ({ allReports: { plan, audit, budget } }) => {

    return (
        <>
            <Meta title={'Association Reports'} />
            <section className="responsivePageDiv">
                <div className="mb-4">
                    <h1 className="routeHeading">{messages.mainHeading}</h1>
                    <span className="block mb-4"></span>
                    <div className="mt-4">
                        <span className="fullPageBorderLine"></span>
                        <h1 className="articleHeading">Plan and Progress Reports</h1>

                        <h2 className="routeSubheading">Reports</h2>
                        <div className="flex flex-wrap mt-3">
                            <ReportContainer reports={plan} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="fullPageBorderLine"></span>
                        <h1 className="articleHeading">Audit and Budget Reports</h1>

                        <h2 className="routeSubheading">Audit Reports</h2>
                        <div className="flex flex-wrap mt-3">
                            <ReportContainer reports={audit} />
                        </div>
                        <h2 className="routeSubheading">Budget Reports</h2>
                        <div className="flex flex-wrap mt-3">
                            <ReportContainer reports={budget} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export const getServerSideProps = async () => {

    const reports = await fetch(`${apiUrl}/reports`).then(res => res.json())
    const planAndProgressReports = []
    const budgetReports = []
    const auditReports = []

    reports.forEach(report => {
        if (report.fileType === "audit") auditReports.push(report)
        else if (report.fileType === "plan") planAndProgressReports.push(report)
        else budgetReports.push(report)
    })

    return {
        props: {
            allReports: {
                plan: planAndProgressReports,
                audit: auditReports,
                budget: budgetReports,
            },
        },
    }
}


export default reports