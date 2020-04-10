import React from 'react';

import { IPageProps } from '../types';
import homePageSettings from '../data/homePageSettings';

import { LayoutFullWidth } from '../components/Layout';
import SEO from '../components/SEO';
import CTA from '../components/home/CTA';
import StickyNews from '../components/home/StickyNews';
import Features from '../components/home/Features';
import LatestNewsCards from '../components/home/LatestNewsCards';

const Home = ({ location }: IPageProps): React.FC => (
  <LayoutFullWidth>
    <SEO title="Home" pathname={location.pathname} />
    <CTA settings={homePageSettings.CTA}/>
    <StickyNews settings={homePageSettings.stickyNews}/>
    <Features settings={homePageSettings.features}/>
    <LatestNewsCards settings={homePageSettings.latestNews}/>
  </LayoutFullWidth>
);

export default Home;
