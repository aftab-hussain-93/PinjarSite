import DownloadSymbol from "./DownloadSymbol"

const HalfPageStatic = ({ headline, photo, htmlContent, subheadline, downloadIcon = false }) => {

    if (!photo) {
        photo = `/events/event_img1.jpeg`
    }

    if (!htmlContent) {
        htmlContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
            <p>kannada text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            `
    }


    return (
        <div className="lg:grid lg:grid-cols-2 lg:max-w-2/3 mx-auto p-8 gap-5">
            <div className="rounded-md overflow-hidden my-auto">
                <img
                    className="w-11/12 h-11/12"
                    src={photo}
                    alt="logo"
                />
            </div>
            <div className="my-2 lg:my-0">
                {headline && <span className="halfPageBorderLine"></span>}
                <div className="flex justify-between items-center">
                    {headline && <h1 className="text-4xl uppercase font-semibold tracking-wide mb-4 text-black">{headline}</h1>}
                    {downloadIcon && <div className=" mb-4 mr-6 p-3">
                        <DownloadSymbol />
                    </div>}
                </div>
                {subheadline && <h1 className="text-2xl capitalize font-bold text-primary mb-3">{subheadline}</h1>}
                <div
                    className="text-gray-500 text-sm overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}>
                </div>

            </div>
        </div>
    )
}

export default HalfPageStatic
