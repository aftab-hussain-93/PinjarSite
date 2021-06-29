import Meta from '../components/Meta'
import ReportCard from '../components/ReportCard'
import {Reports as messages} from '../locale/messages'

const planAndProgressReports = [
    {
        reportName: 'planAndProgress Report1',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
    {
        reportName: 'planAndProgress Report2',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
]

const auditReports = [
    {
        reportName: 'Audit Report1',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
    {
        reportName: 'Audit Report2',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
]

const budgetReports = [
    {
        reportName: 'Budget Report1',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
    {
        reportName: 'Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
    {
        reportName: 'Budget Report1',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
    {
        reportName: 'Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
    {
        reportName: 'Budget Report1',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
    {
        reportName: 'Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
    {
        reportName: 'Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf',
        link: `/documents/Plan_and_Progress_Reportನಿಗಮದ-ಮನವಿ1-12-20.pdf`
    },
]

const reports = () => {

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
                            {
                                planAndProgressReports.map(({ reportName, link }) => {
                                    return <ReportCard reportName={reportName} link={link} />
                                }
                                )
                            }
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="fullPageBorderLine"></span>
                        <h1 className="articleHeading">Audit and Budget Reports</h1>
                        
                        <h2 className="routeSubheading">Audit Reports</h2>
                        <div className="flex flex-wrap mt-3">
                            {
                                auditReports.map(({ reportName, link }) => {
                                    return <ReportCard reportName={reportName} link={link} />
                                }
                                )
                            }
                        </div>
                        <h2 className="routeSubheading">Budget Reports</h2>
                        <div className="flex flex-wrap mt-3">
                            {
                                budgetReports.map(({ reportName, link }) => {
                                    return <ReportCard reportName={reportName} link={link} />
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default reports