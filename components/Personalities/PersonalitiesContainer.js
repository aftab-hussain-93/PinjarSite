import PersonalityCard from "./PersonalityCard"

const PersonalitiesContainer = ({personalities}) => {
    return (
        <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 md:gap-10 gap-2">
            {
                personalities.map((people, key) => <PersonalityCard key={key} {...people} />)
            }
        </div>
    )
}

export default PersonalitiesContainer
