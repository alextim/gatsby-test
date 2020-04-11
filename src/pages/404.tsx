import React from 'react';

import { IPageProps } from '../types/types';
import Layout from '../components/Layout';
import Seo from '../components/SEO';

const NotFoundPage: React.FC<IPageProps> = ({ location }) => (
  <Layout>
    <Seo title="404: Not found" pathname={location.pathname} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
