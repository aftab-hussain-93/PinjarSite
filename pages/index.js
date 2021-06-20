import Meta from '../components/Meta'
import Jumbotron from '../components/Jumbotron'
import Benefits from '../components/Benefits'
import FullWidthStatic from '../components/FullWidthStatic'
import HalfPageStatic from '../components/HalfPageStatic'

const associationDetails = {
  headline: 'Association Details',
  subheadline: 'By Laws',
  downloadIcon: true
}

const planAndProgressReports = {
  headline: 'Plan and Progress Reports',
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

const preamble = {
  headline: 'Preamble',
  downloadIcon: true,
}

export default function Home() {
  return (
    <>
      <Meta/>
      <Jumbotron />
      <div className="bg-white mt-1 lg:max-w-2/3 mx-auto">
        <HalfPageStatic {...preamble} />
        <FullWidthStatic {...associationDetails} />
        <FullWidthStatic {...planAndProgressReports} />
        <Benefits />
        <FullWidthStatic {...fixedAssets} />
        <HalfPageStatic {...fixedAssetsSubheadings1} />
        <HalfPageStatic {...fixedAssetsSubheadings2} />
        <HalfPageStatic {...fixedAssetsSubheadings3} />
      </div>
    </>
  )
}
