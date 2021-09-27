import { avatarDir } from '../../config/api.config'

const PersonalityCard = ({ fullName, designation, image, briefDescription }) => {
    const imagePath = `${avatarDir}${image}`

    return (
        <div className="flex justify-center items-center">
            <div className="w-48 min-h-64 rounded-xl bg-gray-200 flex flex-col shadow">
                <img className="w-auto rounded-t-xl" src={imagePath} alt="avatar" />
                <div className="text-center flex flex-col p-2">
                    <span className="text-base font-bold">{fullName}</span>
                    {designation && <span className="text-xs italic">{designation}</span>}
                </div>
            </div>
        </div>
    )
}

export default PersonalityCard
