import React from 'react';

import { IPageProps } from '../types';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Privacy = ({ location }: IPageProps) => (
  <Layout>
    <SEO pathname={location.pathname} />
    Hello, Privacy
  </Layout>
);

export default Privacy;
