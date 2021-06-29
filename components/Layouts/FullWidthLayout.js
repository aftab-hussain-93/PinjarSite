import DownloadSymbol from '../DownloadSymbol'

const FullWidthLayout = ({ headline, subheadline, htmlContent, downloadLink, downloadIcon=false }) => {

    if (!htmlContent) {
        htmlContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
            <p>kannada text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. kannada text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            `
    }

    return (
        // <div className="p-8">
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
