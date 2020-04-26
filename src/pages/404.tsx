import React from 'react';

import { IPageProps } from '../types/types';
import Layout from '../components/Layout';
import Seo from '../components/SEO';

const NotFoundPage: React.FC<IPageProps> = ({ location }) => (
  <Layout title="404: NOT FOUND">
    <Seo title="404: Not found" pathname={location.pathname} />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
