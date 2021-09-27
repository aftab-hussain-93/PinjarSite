import Meta from '../components/Meta'
import PersonalitiesContainer from '../components/Personalities/PersonalitiesContainer'

import { Personalities as messages } from '../locale/messages'
import { apiUrl } from '../config/api.config'

const personalities = ({ people }) => {

    return (
        <>
            <Meta title={messages.mainHeading} />
            <section className="responsivePageDiv">
                <h1 className="routeHeading">{messages.mainHeading}</h1>
                <p className="mt-4">{messages.briefDescription} </p>
                <article className="mt-4">
                    <span className="fullPageBorderLine"></span>
                    <PersonalitiesContainer personalities={people}/>
                </article>
            </section>
        </>
    )
}

export const getServerSideProps = async () => {
    const people = await fetch(`${apiUrl}/personalities`).then(res => res.json())

    return {
        props: {
            people
        },
    }
}


export default personalities