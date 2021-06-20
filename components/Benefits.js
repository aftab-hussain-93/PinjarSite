import BenefitItem from './BenefitItem'
import DownloadSymbol from '../components/DownloadSymbol'

const benefitItemProp1 = {
    headline: 'For educational purposes'
}
const benefitItemProp2 = {
    headline: 'For employment purposes'
}
const benefitItemProp3 = {
    headline: 'self employment schemes'
}
const benefitItemProp4 = {
    headline: 'scholarships'
}

const Benefits = (allBenefits) => {
    return (
        <div className="p-8">
            <span className="fullPageBorderLine"></span>
            <div className="flex justify-between items-center mb-3">
                <h1 className="text-4xl uppercase font-semibold tracking-wide mb-4 text-black">Benefits from state and central govt</h1>
                <div className=" mb-4 mr-6 p-3">
                    <a href={'/documents/Benefits_REVISED-ALL-SCHEMES-DETAILS-20-21-Revised-1.pdf'} download><DownloadSymbol /></a>
                </div>
            </div>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-16">
                <BenefitItem {...benefitItemProp1} />
                <BenefitItem {...benefitItemProp2} />
                <BenefitItem {...benefitItemProp3} />
                <BenefitItem {...benefitItemProp4} />
            </div>
        </div>
    )
}

export default Benefits
