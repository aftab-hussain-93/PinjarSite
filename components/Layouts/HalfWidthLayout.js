import DownloadSymbol from "../DownloadSymbol"

const HalfWidthLayout = ({ headline, photo, htmlContent, subheadline, downloadLink, downloadIcon = false }) => {

    if (!photo) {
        photo = `/events/event_img1.jpeg`
    }

    if (!htmlContent) {
        htmlContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
            <p>kannada text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            `
    }


    return (
        <section className="lg:grid lg:grid-cols-2 gap-5 mb-4">
            <div className="rounded-md overflow-hidden my-auto">
                <img
                    className="w-11/12 h-11/12"
                    src={photo}
                    alt="logo"
                />
            </div>
            <article className="my-2 lg:my-0">
                {headline && <span className="halfPageBorderLine"></span>}
                <div className="flex justify-between items-center mb-3">
                    {headline && <h1 className="articleHeading">{headline}</h1>}
                    {downloadIcon && <div className=" mb-4 mr-6">
                        <a href={downloadLink} target="blank"><DownloadSymbol /></a>
                    </div>}
                </div>
                {subheadline && <h1 className="text-2xl capitalize font-bold text-primary mb-3">{subheadline}</h1>}
                <div
                    className="text-gray-500 text overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}>
                </div>

            </article>
        </section>
    )
}

export default HalfWidthLayout
