import Meta from '../components/Meta'
import Jumbotron from '../components/Jumbotron'
import Preamble from '../components/Preamble'
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

export default function Home() {
  return (
    <>
      <Meta/>
      <Jumbotron />
      <Preamble />
      <FullWidthStatic {...associationDetails}/>
      <FullWidthStatic {...planAndProgressReports} />
      <Benefits />
      <FullWidthStatic {...fixedAssets} />
      <HalfPageStatic {...fixedAssetsSubheadings1} />
      <HalfPageStatic {...fixedAssetsSubheadings2} />
      <HalfPageStatic {...fixedAssetsSubheadings3} />
    </>
  )
}
