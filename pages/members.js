import Meta from '../components/Meta'
import { Members as messages } from '../locale/messages'
import { serverUrl } from '../config/api.config'

const members = () => {

    return (
        <>
            <Meta title={messages.mainHeading} />
            <section className="responsivePageDiv">
                <h1 className="routeHeading">{messages.mainHeading}</h1>
                <p className="mt-4">{messages.briefDescription} </p>
                <article className="mt-4">
                    <span className="fullPageBorderLine"></span>
                    <h1 className="text-3xl uppercase font-semibold tracking-wide mb-3 text-gray-700">State Committee</h1>
                    <p>{messages.stateBriefDescription}</p>
                    <h2 className="routeSubheading">State Office Bearers</h2>
                    <div className="w-full mt-2 flex justify-center items-center">
                        <img
                            src={`${serverUrl}/uploads/images/State_Office_Bearers.png`}
                            alt="State Office Bearers Image"
                            className="w-full md:w-9/12"
                        />
                    </div>
                    <div className="flex mt-5 justify-center items-center">
                        <span className="w-1/6 h-1 inline-block border-gray-500 border-t-2 mb-2"></span>
                    </div>
                    <div className="flex mt-5 justify-center items-center">
                        <span className="border-primary border-2 px-4 py-2 text-primary mb-2 uppercase font-bold text-lg">Divisional Vice Presidents</span>
                    </div>
                    <div className="w-full mt-2 flex justify-center items-center">
                        <img
                            src={`${serverUrl}/uploads/images/Divisional_Vice_Presidents.png`}
                            alt="Divsional Vice Presidents"
                            className="w-full md:w-8/12"
                        />
                    </div>
                </article>
                <article className="mt-4">
                    <span className="fullPageBorderLine"></span>
                    <h2 className="text-3xl uppercase font-semibold tracking-wide mb-3 text-gray-700">District Committee</h2>
                    <p>{messages.distBriefDescription}</p>
                    <h2 className="routeSubheading">Structure</h2>
                    <div className="w-full flex justify-center items-center mt-2">
                        <img
                            src={`${serverUrl}/uploads/images/District_Structure.png`}
                            alt="District Structure"
                            className="w-full md:w-9/12"
                        />
                    </div>
                </article>
                <article className="mt-4">
                    <span className="fullPageBorderLine"></span>
                    <h2 className="text-3xl uppercase font-semibold tracking-wide mb-3 text-gray-700">Taluka Committee</h2>
                    <p>{messages.talukaBriefDescription}</p>
                    <h2 className="routeSubheading">Structure</h2>
                    <div className="w-full flex justify-center items-center mt-2">
                        <img
                            src={`${serverUrl}/uploads/images/Taluka_Structure.png`}
                            alt="Taluka Structure"
                            className="w-full md:w-9/12"
                        />
                    </div>
                    <h2 className="routeSubheading">Objectives</h2>
                    <ol className="list-decimal pl-8 leading-7">
                        <li className="pt-3">Mandatory Quarterly Meetings</li>
                        <li>Administrating Taluka level activities</li>
                        <li>Reporting to State committee</li>
                    </ol>
                </article>
            </section>
        </>
    )
}   

export default members