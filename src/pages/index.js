import React from 'react'

import homePageSettings from '../components/settings/homePageSettings'
import LayoutFullWidth from '../components/LayoutFullWidth'
import SEO from '../components/SEO'
import CTA from '../components/home/CTA'
import Features from '../components/home/Features'
import LatestNews from '../components/home/LatestNews'

const IndexPage = () => (
  <LayoutFullWidth>
    <SEO title="Home" />
    <CTA settings={homePageSettings.CTA}/>
    <Features settings={homePageSettings.features}/>
    <LatestNews settings={homePageSettings.latestNews}/>
  </LayoutFullWidth>
)

export default IndexPage
