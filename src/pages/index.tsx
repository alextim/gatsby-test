import React from 'react';

import { IPageProps } from '../types/page-types';

import { LayoutFullWidth } from '../components/Layout';
import SEO from '../components/SEO';
import CTA from '../components/home/CTA';
import StickyNews from '../components/home/StickyNews';
import Features from '../components/home/Features';
import LatestNewsCards from '../components/home/LatestNewsCards';

const HomePage: React.FC<IPageProps> = ({ location }) => (
  <LayoutFullWidth>
    <SEO title="Home" pathname={location.pathname} />
    <CTA />
    <StickyNews />
    <Features />
    <LatestNewsCards />
  </LayoutFullWidth>
);

export default HomePage;
