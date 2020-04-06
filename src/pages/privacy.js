import React from 'react';

import SEO from "../components/SEO";
import Layout  from "../components/Layout";

const Privacy = ({location}) => (
    <Layout>
        <SEO pathname={location.pathname} />
        Hello, Privacy
    </Layout>
);

export default Privacy;