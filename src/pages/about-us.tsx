import React from 'react';
import Img from 'gatsby-image';

import { IPageProps } from '../types/types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useDefaultImage from '../helpers/hooks/useDefaultBannerImage';

const PAGE_TITLE = 'О нас';

const AboutUs = ({ location }: IPageProps) => {
  const img = useDefaultImage();
  return (
    <Layout title={PAGE_TITLE}>
      <SEO title={PAGE_TITLE} pathname={location.pathname} />
      <Img fluid={img} />
    </Layout>
  );
};

export default AboutUs;
