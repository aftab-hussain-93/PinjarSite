import Meta from '../components/Meta'
import AssociationDetails from '../components/AssociationDetails'
import FullWidthLayout from '../components/Layouts/FullWidthLayout'
import HalfWidthLayout from '../components/Layouts/HalfWidthLayout'

const about = ({ images }) => {
    const fixedAssets = {
        headline: 'Association Fixed Assets and Properties',
        photo: images.preamble,
    }

    const fixedAssetsSubheadings1 = {
        subheadline: `College`,
        photo: images.fa_college,
    }
    const fixedAssetsSubheadings2 = {
        subheadline: `Shaadi Mahal`,
        photo: images.fa_wedding_hall,
    }
    const fixedAssetsSubheadings3 = {
        subheadline: `Shouhard Bhavan`,
        photo: images.fa_shouhard_bhavan,
    }
    
    const preamble = {
        headline: 'Preamble',
        downloadIcon: true,
        photo: images.preamble,
        downloadLink: `/documents/Preamble_ನಿಗಮದ-ಮನವಿ1-12-20.pdf`,
        htmlContent: `<p>The Nadaf community is also called with names - Behna, Dudekula, Mansuri, Pinjar in different regions of India. Ancestors of our community immigrated from Afghanistan and Persia (Iran) for the business purpose of Cotton ginning and trading.</p> <br />
                <p>The community is called as Behna and Mansuri in North India, as Dudekula in Andrapradesh and Telangana, as Nadafs and Pinjars in Karnataka. Total population of this community may exceed 10 million. King Tippu Sulthan belongs to this community. </p>`
    }

    return (
        <div>
            <Meta title={'About Association'} />
            <section className="responsivePageDiv">
                <h1 className="routeHeading">Karnataka Rajya Nadaf Pinjar Sangha</h1>
                <p className="mt-4">The Pinjara or Nadafs are a community found in the states of Madhya Pradesh, Maharashtra, Karnataka, Gujarat and Rajasthan in India. The terms Pinjara, Mansoori, and Dhunia are used interchangebly in some regions of India whereas in other regions they are separate communities. They are also known as Mansoori, especially in Gujarat, where the name Pinjara is no longer used. The Pinjara is the traditional cotton carder of Central India, just like the are the traditional cotton carders of North India.</p>
                <div className="mt-4">
                    <HalfWidthLayout {...preamble} />
                    <AssociationDetails />
                    <FullWidthLayout {...fixedAssets} />
                    <HalfWidthLayout {...fixedAssetsSubheadings1} />
                    <HalfWidthLayout {...fixedAssetsSubheadings2} />
                    <HalfWidthLayout {...fixedAssetsSubheadings3} />
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
            </section>
        </div>
    )
}

export async function getStaticProps(context) {
    const url = process.env.URL

    const { success, data } = await fetch(`${url}/api/images`).then(res => res.json())
    const allImages = {}
    if (success) {
        data.forEach(item => {
            if (!(item.name in allImages)) {
                allImages[item.name] = item.url
            }
        })
    }
    return {
        props: {
            images: allImages
        }, // will be passed to the page component as props
    }
}

export default about