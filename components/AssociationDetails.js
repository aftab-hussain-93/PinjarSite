const AssociationDetails = () => {

    const headline = "Association Details"
    const downloadLink = `/documents/Association_Bylaws.pdf`
    const associationDetailsDescriptionPara1 = "Karnataka Rajya Nadaf /Pinjar Sangha(KRNPS) was formed in the year 1993 under the leadership of Late Janab H. Ibrahim sab with the sole purpose of the upliftment of the community in all respects. District and Taluk level committees have been formed across the state under his stewardship. Three state level rallies are convened and Educational Scholarships are given to underprivileged students."
    const associationDetailsDescriptionPara2 = "Prof. M. M. Nadaf led the community after the demise of Janab H. Ibrahim Sab in the year 2014 and presently Mr. Jaleel Sab is heading this Association."

    
    return (
        <article className="mb-4">
            <span className="fullPageBorderLine"></span>
            <div className="flex justify-between items-center mb-3">
                <h1 className="articleHeading">{headline}</h1>
            </div>
            <div>
                <p>{associationDetailsDescriptionPara1}</p><br />
                <p>{associationDetailsDescriptionPara2}</p>
            </div>
            <div className="mt-3">
                <a href={downloadLink} target="blank" className="downloadBtn mt-2 inline-block" >Download By-Laws</a>
            </div>
        </article>
    )
}

export default AssociationDetails
