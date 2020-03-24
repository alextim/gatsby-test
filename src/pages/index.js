import React from 'react'

import homePageSettings from '../components/home/homePageSettings'
import LayoutFullWidth from '../components/LayoutFullWidth'
import SEO from '../components/SEO'
import CTA from '../components/home/CTA'
import Features from '../components/home/Features'

const IndexPage = () => (
  <LayoutFullWidth>
    <SEO title="Home" />
    <CTA settings={homePageSettings.CTA}/>
    <Features settings={homePageSettings.features}/>
  </LayoutFullWidth>
)

export default IndexPage
