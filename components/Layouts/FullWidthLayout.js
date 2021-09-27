import DownloadSymbol from '../DownloadSymbol'

const FullWidthLayout = ({ headline, subheadline, htmlContent, downloadLink, downloadIcon=false }) => {

    if (!htmlContent) {
        htmlContent = ``
    }

    return (
        <article className="mb-4">
            <span className="fullPageBorderLine"></span>
            <div className="flex justify-between items-center mb-3">
                {headline && <h1 className="articleHeading">{headline}</h1>}
                {downloadIcon && <div className="mb-4 mr-6">
                    <a href={downloadLink} target="blank"><DownloadSymbol /></a>
                </div>}
            </div>
            {subheadline && <h1 className="text-2xl capitalize font-bold text-primary mb-3">{subheadline}</h1>}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div> 
        </article>
    )
}

export default FullWidthLayout
