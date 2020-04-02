import React from 'react'

import homePageSettings from '../data/homePageSettings'

import LayoutFullWidth from '../components/LayoutFullWidth'
import SEO from '../components/SEO'
import CTA from '../components/home/CTA'
import StickyNews from '../components/home/StickyNews'
import Features from '../components/home/Features'
import LatestNewsCards from '../components/home/LatestNewsCards'

export default ({location}) => 
  <LayoutFullWidth>
    <SEO title="Home" pathname={location.pathname} />
    <CTA settings={homePageSettings.CTA}/>
    <StickyNews settings={homePageSettings.stickyNews}/>
    <Features settings={homePageSettings.features}/>
    <LatestNewsCards settings={homePageSettings.latestNews}/>
  </LayoutFullWidth>
