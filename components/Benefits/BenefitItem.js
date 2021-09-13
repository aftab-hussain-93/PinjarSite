import Link from 'next/link'
import { serverUrl } from '../../config/api.config'

const BenefitItem = ({ headline, photo, htmlContent }) => {
    photo = `${serverUrl}uploads/images/event_img1.jpeg`
    
    if (!htmlContent) {
        htmlContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
            <p>kannada text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            `
    }

    return (
        <div className="card">
            <img src={photo} className="w-full h-32 sm:h-56 object-cover" />
            <div className="m-4 px-4 pb-2">
                <h1
                    className="text-2xl capitalize font-bold  mb-4 text-primary">{headline}</h1>
                <div
                    className="text-gray-500 text-sm sm:h-52 h-20 overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}>
                </div>
                <div className="text-primary text-sm font-bold cursor-pointer tracking-wider hover:text-gray-500">
                    <Link href='#'>More Details</Link>
                </div>
            </div>
        </div>
    )


}

export default BenefitItem 