import React from 'react';

import { IPageProps } from '../types/types';

import { LayoutFullWidth } from '../components/Layout';
import SEO from '../components/SEO';
import Slider from '../components/home/Slider';
import TopDestinations from '../components/home/TopDestinations';
import CTA from '../components/home/CTA';
import StickyTrip from '../components/home/StickyTrip';
import LatestTrips from '../components/home/LatestTrips';
import Features from '../components/home/Features';
import LatestPosts from '../components/home/LatestPosts';

const HomePage = ({ location }: IPageProps) => (
  <LayoutFullWidth>
    <SEO title="Home" pathname={location.pathname} />
    <Slider />
    <TopDestinations />
    <CTA />
    <StickyTrip />
    <LatestTrips />
    <Features />
    <LatestPosts />
  </LayoutFullWidth>
);

export default HomePage;
