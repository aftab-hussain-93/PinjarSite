import DownloadSymbol from './DownloadSymbol'

const FullWidthStatic = ({ headline, subheadline, htmlContent, downloadLink, downloadIcon = false }) => {

    if (!htmlContent) {
        htmlContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
            <p>kannada text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. kannada text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            `
    }

    return (
        <div className="my-4">
            <span className="fullPageBorderLine"></span>
            <div className="flex justify-between items-center ">
                {headline && <h1 className="text-3xl uppercase font-semibold tracking-wide mb-4 text-black">{headline}</h1>}
                {downloadIcon && <div className=" mb-4 mr-6 p-3">
                    <a href={downloadLink} download><DownloadSymbol /></a>
                </div>}
            </div>
            {subheadline && <h1 className="text-2xl capitalize font-semibold text-primary mb-3">{subheadline}</h1>}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
    )
}

export default FullWidthStatic
