import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default ({location}) => (
  <Layout>
    <SEO title="Page two" pathname={location.pathname} />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  </Layout>
);