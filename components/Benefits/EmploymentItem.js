import Link from 'next/link'
import { serverUrl } from '../../config/api.config'

const EmploymentItem = ({ headline, photo, htmlContent }) => {
    photo = `${serverUrl}/uploads/images/event_img1.jpeg`

    return (
        <div className="card">
            <img src={photo} className="w-full h-32 sm:h-56 object-cover" />
            <div className="m-4 px-4 pb-2">
                <h1
                    className="text-2xl capitalize font-bold  mb-4 text-primary">Employment Purposes</h1>
                <div
                    className="text-gray-500 text-sm sm:h-52 h-20 overflow-hidden">
                    <div className="my-2">
                        <ol className="list-decimal pl-4 leading-7">
                            <li className="pt-1"> Free Job Trainings</li>
                            <li>Free Competitive Classes Coachings</li>
                            <li>Free Hostel</li>
                            <li>Financial Aid to Students</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmploymentItem