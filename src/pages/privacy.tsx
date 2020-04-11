import React from 'react';

import { IPageProps } from '../types/types';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Privacy: React.FC<IPageProps> = ({ location }) => (
  <Layout>
    <SEO pathname={location.pathname} />
    Hello, Privacy
  </Layout>
);

export default Privacy;
