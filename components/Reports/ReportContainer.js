import ReportCard from "./ReportCard"

const ReportContainer = ({ reports }) => {

    return (
        <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 md:gap-10 gap-2 ">
            {
                reports.map((report, key) => <ReportCard key={key} {...report} />)
            }
        </div>
    )
}

export default ReportContainer
