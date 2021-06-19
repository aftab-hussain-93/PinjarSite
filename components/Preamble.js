import DownloadSymbol from "./DownloadSymbol"

const Preamble = () => {
    return (
        <div className="lg:grid lg:grid-cols-2 lg:max-w-2/3 mx-auto p-8 gap-5">
            <div className="rounded-md overflow-hidden my-auto">
                <img
                    className="w-11/12 h-11/12"
                    src="/events/event_img1.jpeg"
                    alt="logo"
                />
            </div>
            <div>
                <span className="halfPageBorderLine"></span>
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl uppercase font-semibold tracking-wide mb-4 text-black">Preamble</h1>
                    <div className=" mb-4 mr-6 p-3">
                        <DownloadSymbol />
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor ducimus doloribus delectus voluptates possimus autem incidunt. Hic quas earum commodi nulla cupiditate. Iusto impedit error quaerat sint asperiores illo!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor ducimus doloribus delectus voluptates possimus autem incidunt. Hic quas earum commodi nulla cupiditate. Iusto impedit error quaerat sint asperiores illo!</p>
            </div>
        </div>
    )
}

export default Preamble
