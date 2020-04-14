import React from 'react';

import { IPageProps } from '../types/types';

import { LayoutFullWidth } from '../components/Layout';
import SEO from '../components/SEO';

const AboutUs: React.FC<IPageProps> = ({ location }) => (
  <LayoutFullWidth>
    <SEO title="О нас" pathname={location.pathname} />
  </LayoutFullWidth>
);

export default AboutUs;
