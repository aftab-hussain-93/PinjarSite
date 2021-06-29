const ReportCard = ({ reportName="Report Name", link="#" }) => {

    return (
        <div className="md:w-1/6 w-1/4 border border-solid bg-gray-50 shadow-sm overflow-hidden text-center md:py-5 py-1 m-2 px-2">
            <div className="flex justify-center items-center md:p-4 w-full h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <a className="text-lg leading-snug tracking-tight font-medium hover:underline hover:text-primary" title={reportName} href={link} target="_blank">{reportName}</a>
        </div>
    )
}

export default ReportCard