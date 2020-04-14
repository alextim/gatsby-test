import React from 'react';
import Img from 'gatsby-image';

import { IPageProps } from '../types/types';

import { LayoutFullWidth } from '../components/Layout';
import SEO from '../components/SEO';
import useDefaultImage from '../helpers/hooks/useDefaultBannerImage';

const AboutUs: React.FC<IPageProps> = ({ location }) => {
  const img = useDefaultImage();
  return (
    <LayoutFullWidth>
      <SEO title="О нас" pathname={location.pathname} />
      <Img fluid={img} />
    </LayoutFullWidth>
  );
};

export default AboutUs;
