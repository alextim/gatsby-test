import React from 'react';
import Img from 'gatsby-image';

import { IPageProps } from '../types/page-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useDefaultImage from '../helpers/hooks/useDefaultBannerImage';

const AboutUs: React.FC<IPageProps> = ({ location }) => {
  const img = useDefaultImage();
  return (
    <Layout title="О нас">
      <SEO title="О нас" pathname={location.pathname} />
      <Img fluid={img} />
    </Layout>
  );
};

export default AboutUs;
