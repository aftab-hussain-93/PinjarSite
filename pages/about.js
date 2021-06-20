import Meta from '../components/Meta'
import InRouteFullPageStatic from '../components/InRouteFullPageStatic'
import InRouteHalfPageStatic from '../components/InRouteHalfPageStatic'

const associationDetails = {
    headline: 'Association Details',
    subheadline: 'By Laws',
    downloadIcon: true,
    downloadLink: `/documents/Association_Bylaws.pdf`
}

const fixedAssets = {
    headline: 'Association Fixed Assets and Properties',
}

const fixedAssetsSubheadings1 = {
    subheadline: `College`
}
const fixedAssetsSubheadings2 = {
    subheadline: `Shaadi Mahal`
}
const fixedAssetsSubheadings3 = {
    subheadline: `Shouhard Bhavan`
}

const about = () => {

    return (
        <div>
            <Meta title={'About Association'} />
            <div className="md:max-w-2/3 mx-auto md:p-12 p-2 bg-white mt-1">
                <h1 className="text-4xl font-semibold border-gray-300 uppercase text-black border-b pb-2 tracking-wide">Karnataka Rajya Nadaf Pinjar Sangha</h1>
                <p className="mt-4">Brief description of the committee. Brief description of the committee. Brief description of the committee. Brief description of the committee. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam, quibusdam hic repellat fuga eveniet blanditiis porro aliquam adipisci in cupiditate nemo consequatur corrupti minima reiciendis fugiat voluptates nostrum neque.</p>
                <div className="mt-4">
                    <InRouteFullPageStatic {...associationDetails} />
                    <InRouteFullPageStatic {...fixedAssets} />
                    <InRouteHalfPageStatic {...fixedAssetsSubheadings1} />
                    <InRouteHalfPageStatic {...fixedAssetsSubheadings2} />
                    <InRouteHalfPageStatic {...fixedAssetsSubheadings3} />
                    <div className="my-4">
                        <span className="fullPageBorderLine"></span>
                        <div className="flex justify-between items-center ">
                            <h1 className="text-3xl uppercase font-semibold tracking-wide mb-4 text-black">{`Affiliated Associations`}</h1>
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi itaque nobis fugit sunt necessitatibus. Nesciunt expedita laboriosam id possimus. Repellat modi hic dignissimos provident unde tenetur, nulla dolore in officiis?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about